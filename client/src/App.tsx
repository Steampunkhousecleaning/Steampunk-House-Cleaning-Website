import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
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
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import CleaningChecklist from "./pages/CleaningChecklist";

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
        <Route path="/locations/:slug" component={LocationMetro} />
        <Route path="/faq" component={FAQ} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/cleaning-checklist" component={CleaningChecklist} />
        <Route path="/get-a-quote" component={GetAQuote} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
