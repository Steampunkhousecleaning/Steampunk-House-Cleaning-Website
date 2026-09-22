/**
 * Post-build prerender for the Vite SPA.
 * Serves dist/public, visits each SEO route in headless Chrome, and writes
 * fully rendered HTML (unique title/meta + #root content) so crawlers and
 * Netlify get real HTML without waiting for client JS.
 *
 * Usage: node scripts/prerender.mjs
 * (run after `vite build`; also wired into `pnpm run build` / Netlify)
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "dist", "public");
const PRERENDER_SHELL = path.join(OUT_DIR, "_prerender_shell.html");
const PORT = Number(process.env.PRERENDER_PORT || 4179);
const ORIGIN = `http://127.0.0.1:${PORT}`;

/** Routes that must ship unique HTML for crawlers */
const ROUTES = [
  "/",
  "/standard-cleaning",
  "/deep-cleaning",
  "/recurring-cleaning",
  "/move-in-move-out",
  "/airbnb-cleaning",
  "/commercial-cleaning",
  "/about",
  "/locations",
  "/locations/los-angeles-orange-county",
  "/locations/las-vegas-nevada",
  "/locations/sacramento",
  "/faq",
  "/reviews",
  "/cleaning-checklist",
  "/blog",
  "/blog/house-cleaning-las-vegas-hard-water",
  "/get-a-quote",
  "/privacy",
  "/terms",
  "/locations/las-vegas-nevada/boulder-city",
  "/locations/las-vegas-nevada/centennial-hills",
  "/locations/las-vegas-nevada/enterprise",
  "/locations/las-vegas-nevada/green-valley",
  "/locations/las-vegas-nevada/henderson",
  "/locations/las-vegas-nevada/las-vegas",
  "/locations/las-vegas-nevada/north-las-vegas",
  "/locations/las-vegas-nevada/paradise",
  "/locations/las-vegas-nevada/reno",
  "/locations/las-vegas-nevada/sparks",
  "/locations/las-vegas-nevada/spring-valley",
  "/locations/las-vegas-nevada/summerlin",
  "/locations/las-vegas-nevada/sunrise-manor",
  "/locations/las-vegas-nevada/whitney",
  "/locations/los-angeles-orange-county/anaheim",
  "/locations/los-angeles-orange-county/burbank",
  "/locations/los-angeles-orange-county/costa-mesa",
  "/locations/los-angeles-orange-county/culver-city",
  "/locations/los-angeles-orange-county/downey",
  "/locations/los-angeles-orange-county/fullerton",
  "/locations/los-angeles-orange-county/glendale",
  "/locations/los-angeles-orange-county/huntington-beach",
  "/locations/los-angeles-orange-county/inglewood",
  "/locations/los-angeles-orange-county/irvine",
  "/locations/los-angeles-orange-county/long-beach",
  "/locations/los-angeles-orange-county/los-angeles",
  "/locations/los-angeles-orange-county/mission-viejo",
  "/locations/los-angeles-orange-county/newport-beach",
  "/locations/los-angeles-orange-county/orange",
  "/locations/los-angeles-orange-county/pasadena",
  "/locations/los-angeles-orange-county/pomona",
  "/locations/los-angeles-orange-county/santa-ana",
  "/locations/los-angeles-orange-county/santa-monica",
  "/locations/los-angeles-orange-county/torrance",
  "/locations/los-angeles-orange-county/tustin",
  "/locations/los-angeles-orange-county/west-hollywood",
  "/locations/sacramento/elk-grove",
  "/locations/sacramento/folsom",
  "/locations/sacramento/roseville",
  "/locations/sacramento/sacramento",
  "/locations/los-angeles-orange-county/standard-cleaning",
  "/locations/los-angeles-orange-county/deep-cleaning",
  "/locations/los-angeles-orange-county/recurring-cleaning",
  "/locations/las-vegas-nevada/standard-cleaning",
  "/locations/las-vegas-nevada/deep-cleaning",
  "/locations/las-vegas-nevada/recurring-cleaning",
  "/locations/sacramento/standard-cleaning",
  "/locations/sacramento/deep-cleaning",
  "/locations/sacramento/recurring-cleaning",
  "/404",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".map": "application/json",
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const safe = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const abs = path.join(OUT_DIR, safe);

  if (!abs.startsWith(OUT_DIR)) return null;

  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return abs;

  const asIndex = path.join(abs, "index.html");
  if (fs.existsSync(asIndex) && fs.statSync(asIndex).isFile()) return asIndex;

  // SPA fallback: use pristine Vite shell, not a previously prerendered route
  if (fs.existsSync(PRERENDER_SHELL)) return PRERENDER_SHELL;
  const fallback = path.join(OUT_DIR, "index.html");
  if (fs.existsSync(fallback)) return fallback;
  return null;
}

function startStaticServer() {
  const server = http.createServer((req, res) => {
    const urlPath = req.url || "/";
    const filePath = resolveFile(urlPath === "/" ? "/index.html" : urlPath);
    if (!filePath) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType(filePath) });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve, reject) => {
    server.listen(PORT, "127.0.0.1", () => resolve(server));
    server.on("error", reject);
  });
}

function outPathForRoute(route) {
  if (route === "/") return path.join(OUT_DIR, "index.html");
  // Pretty URL: /about -> about/index.html (Netlify serves /about from this)
  const dir = path.join(OUT_DIR, route.replace(/^\//, ""));
  return path.join(dir, "index.html");
}

function findChromeExecutable() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ].filter(Boolean);

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }

  try {
    const bundled = puppeteer.executablePath();
    if (bundled && fs.existsSync(bundled)) return bundled;
  } catch {
    /* not installed yet */
  }
  return undefined;
}

async function ensureChrome() {
  let executablePath = findChromeExecutable();
  if (executablePath) return executablePath;

  console.log("Chrome not found — installing via puppeteer browsers…");
  const { execSync } = await import("node:child_process");
  execSync("pnpm exec puppeteer browsers install chrome", {
    stdio: "inherit",
    cwd: ROOT,
    env: process.env,
  });
  executablePath = findChromeExecutable();
  if (!executablePath) {
    throw new Error(
      "Could not locate Chrome after install. Set PUPPETEER_EXECUTABLE_PATH.",
    );
  }
  return executablePath;
}

async function waitForPrerenderReady(page, route) {
  await page.waitForFunction(
    () => {
      const root = document.getElementById("root");
      return Boolean(root && root.innerHTML && root.innerHTML.length > 400);
    },
    { timeout: 45000 },
  );
  // SEO component sets title/meta in useEffect — give it a tick
  await page.waitForFunction(
    () => Boolean(document.title && document.title.length > 5),
    { timeout: 10000 },
  );
  await new Promise((r) => setTimeout(r, 250));
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    // Avoid hanging on third-party fonts/analytics
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const type = req.resourceType();
      const url = req.url();
      if (
        type === "font" ||
        url.includes("fonts.googleapis.com") ||
        url.includes("fonts.gstatic.com") ||
        url.includes("umami") ||
        url.includes("google-analytics") ||
        url.includes("googletagmanager")
      ) {
        req.abort();
        return;
      }
      req.continue();
    });

    const url = `${ORIGIN}${route}`;
    const response = await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    if (!response || !response.ok()) {
      throw new Error(`HTTP ${response?.status()} for ${route}`);
    }

    await waitForPrerenderReady(page, route);

    const title = await page.title();
    const description = await page.$eval(
      'meta[name="description"]',
      (el) => el.getAttribute("content") || "",
    );

    let html = await page.content();
    // Ensure doctype present for validators/crawlers
    if (!/^<!DOCTYPE/i.test(html)) {
      html = `<!DOCTYPE html>\n${html}`;
    }

    const dest = outPathForRoute(route);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, html, "utf8");

    console.log(`  ✓ ${route} → ${path.relative(ROOT, dest)}`);
    console.log(`      title: ${title}`);
    console.log(`      description: ${description.slice(0, 80)}${description.length > 80 ? "…" : ""}`);
    return { route, title, description, dest };
  } finally {
    await page.close();
  }
}

async function main() {
  const indexHtml = path.join(OUT_DIR, "index.html");
  if (!fs.existsSync(indexHtml)) {
    console.error(`Missing ${OUT_DIR}/index.html — run vite build first.`);
    process.exit(1);
  }

  // Preserve the Vite SPA shell so later routes do not inherit head tags
  // (JSON-LD, titles) written when "/" was prerendered first.
  fs.copyFileSync(indexHtml, PRERENDER_SHELL);

  console.log(`Prerendering ${ROUTES.length} routes from ${OUT_DIR}`);
  const server = await startStaticServer();
  const executablePath = await ensureChrome();
  console.log(`Chrome: ${executablePath}`);

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--font-render-hinting=none",
    ],
  });

  const results = [];
  try {
    for (const route of ROUTES) {
      results.push(await prerenderRoute(browser, route));
    }
  } finally {
    await browser.close();
    server.close();
    try {
      fs.unlinkSync(PRERENDER_SHELL);
    } catch {
      /* ignore */
    }
  }

  // Sanity: titles must not all be identical (except we allow home == shell)
  const titles = new Set(results.map((r) => r.title));
  if (titles.size < ROUTES.length - 1) {
    console.warn(
      `Warning: only ${titles.size} unique titles for ${ROUTES.length} routes`,
    );
  }

  const duplicates = results.filter(
    (r) =>
      r.route !== "/" &&
      r.title ===
        "Steampunk House Cleaning | Professional Cleaners in LA, OC, Nevada & Sacramento",
  );
  if (duplicates.length) {
    console.error(
      "Prerender failed: non-home routes still have the default homepage title:",
      duplicates.map((d) => d.route).join(", "),
    );
    process.exit(1);
  }

  console.log(`Prerender complete (${results.length} pages).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
