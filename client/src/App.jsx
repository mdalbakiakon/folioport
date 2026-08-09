import { ReactLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Identity from "./pages/Identity";
import Contact from "./pages/Contact";
import Honor from "./pages/Honor";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";

import SEO from "./components/SEO";
import { SEO_CONFIG } from "./config/seo.js";
import ScrollToTop from "./components/ScrolltoTop.jsx";

const App = () => {
  // State to track mobile status (defaults to false for SSR safety)
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on client-side mount
  useEffect(() => {
    const checkMobile = () => {
      // Set breakpoint to 768px (standard tablet/mobile cutoff)
      setIsMobile(window.innerWidth < 768);
    };

    // Run immediately on mount
    checkMobile();

    // Listen for resize events (e.g., rotating a tablet)
    window.addEventListener("resize", checkMobile);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Theme Logic
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("baki-portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("baki-portfolio-theme", theme);
  }, [theme]);

  const handleThemeDark = () => {
    if (theme === "light") setTheme("dark");
  };

  const handleThemeLight = () => {
    if (theme === "dark") setTheme("light");
  };

  // Routes Definition
  const routes = (
    <Routes>
      <Route
        element={
          <Layout
            theme={theme}
            handleThemeDark={handleThemeDark}
            handleThemeLight={handleThemeLight}
          />
        }
      >
        {/* Home */}
        <Route path="/" element={<Home theme={theme} />} />

        {/* Identity */}
        <Route
          path="/identity"
          element={
            <>
              <SEO {...SEO_CONFIG.identity} theme={theme} />
              <Identity theme={theme} />
            </>
          }
        />

        {/* Archive */}
        <Route
          path="/archive"
          element={
            <>
              <SEO {...SEO_CONFIG.archive} theme={theme} />
              <Archive theme={theme} />
            </>
          }
        />

        {/* Honor */}
        <Route
          path="/honor"
          element={
            <>
              <SEO {...SEO_CONFIG.honor} theme={theme} />
              <Honor theme={theme} />
            </>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <>
              <SEO {...SEO_CONFIG.contact} theme={theme} />
              <Contact theme={theme} />
            </>
          }
        />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <>
            <SEO {...SEO_CONFIG.notFound} theme={theme} />
            <PageNotFound theme={theme} />
          </>
        }
      />
    </Routes>
  );

  if (isMobile) {
    return (
      <>
        <ScrollToTop />
        {routes}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 1,
      }}
    >
      <ScrollToTop />
      {routes}
    </ReactLenis>
  );
};

export default App;
