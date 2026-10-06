import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Home ships in the main bundle; other pages load on demand.
const About = lazy(() => import("./pages/About"));
const Ministries = lazy(() => import("./pages/Ministries"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Scroll to top on navigation, or to the #hash target if present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait a frame (or two, for lazy pages) for the target to render
      let tries = 0;
      const seek = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else if (tries++ < 20) setTimeout(seek, 50);
      };
      seek();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

function PageFallback() {
  return <div style={{ minHeight: "70vh" }} aria-busy="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <ScrollManager />
          <Header />
          <main id="main" tabIndex={-1}>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/services" element={<Navigate to="/ministries" replace />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </MotionConfig>
      </LazyMotion>
    </BrowserRouter>
  );
}
