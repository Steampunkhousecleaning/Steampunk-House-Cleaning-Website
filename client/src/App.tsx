import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { StickyCallBar } from "./components/StickyCallBar";
import { trackPageView, initTelClickTracking } from "@/lib/analytics";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StandardCleaning from "./pages/StandardCleaning";
import DeepCleaning from "./pages/DeepCleaning";
import RecurringCleaning from "./pages/RecurringCleaning";
import MoveInOut from "./pages/MoveInOut";
import AirbnbCleaning from "./pages/AirbnbCleaning";
import CommercialCleaning from "./pages/CommercialCleaning";
import AboutUs from "./pages/AboutUs";
import GetAQuote from "./pages/GetAQuote";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Locations from "./pages/Locations";
import LocationMetro from "./pages/LocationMetro";
import LocationChild from "./pages/LocationChild";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import CleaningChecklist from "./pages/CleaningChecklist";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Scroll to top on every route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      // Wait for the new route to mount before looking for the target
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "instant", block: "start" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

// GA4: tel: click delegation (+ optional manual SPA page_view, see lib/analytics.ts).
// Rendered AFTER <Switch> so the page's <SEO> effect has already set document.title.
function PageViewTracker() {
  const [location] = useLocation();
  useEffect(() => {
    trackPageView();
  }, [location]);
  useEffect(() => initTelClickTracking(), []);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/standard-cleaning" component={StandardCleaning} />
        <Route path="/deep-cleaning" component={DeepCleaning} />
        <Route path="/recurring-cleaning" component={RecurringCleaning} />
        <Route path="/move-in-move-out" component={MoveInOut} />
        <Route path="/airbnb-cleaning" component={AirbnbCleaning} />
        <Route path="/commercial-cleaning" component={CommercialCleaning} />
        <Route path="/about" component={AboutUs} />
        <Route path="/locations" component={Locations} />
        <Route path="/locations/:metro/:child" component={LocationChild} />
        <Route path="/locations/:slug" component={LocationMetro} />
        <Route path="/faq" component={FAQ} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/cleaning-checklist" component={CleaningChecklist} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/blog" component={Blog} />
        <Route path="/get-a-quote" component={GetAQuote} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <PageViewTracker />
    </>
  );
}

/**
 * Netlify Pretty URLs serve every page at /path/ (and 301 /path -> /path/).
 * Render internal hrefs with the trailing slash so crawlers never hit a redirect.
 */
const withTrailingSlash = (href: string) => {
  if (!href.startsWith("/")) return href;
  const i = href.search(/[?#]/);
  const path = i === -1 ? href : href.slice(0, i);
  const rest = i === -1 ? "" : href.slice(i);
  return (path.endsWith("/") ? path : `${path}/`) + rest;
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter hrefs={withTrailingSlash}>
            <Router />
            <StickyCallBar />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
