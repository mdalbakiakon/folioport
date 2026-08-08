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

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("baki-portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("baki-portfolio-theme", theme);
  }, [theme]);

  const handleThemeDark = () => {
    if (theme === "light") {
      setTheme("dark");
    }
  };

  const handleThemeLight = () => {
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <ReactLenis root>
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
          <Route
            path="/"
            element={<Home theme={theme} />}
          />

          {/* Identity */}
          <Route
            path="/identity"
            element={
              <>
                <SEO
                  {...SEO_CONFIG.identity}
                  theme={theme}
                />
                <Identity theme={theme} />
              </>
            }
          />

          {/* Archive */}
          <Route
            path="/archive"
            element={
              <>
                <SEO
                  {...SEO_CONFIG.archive}
                  theme={theme}
                />
                <Archive theme={theme} />
              </>
            }
          />

          {/* Honor */}
          <Route
            path="/honor"
            element={
              <>
                <SEO
                  {...SEO_CONFIG.honor}
                  theme={theme}
                />
                <Honor theme={theme} />
              </>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <>
                <SEO
                  {...SEO_CONFIG.contact}
                  theme={theme}
                />
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
              <SEO
                {...SEO_CONFIG.notFound}
                theme={theme}
              />
              <PageNotFound theme={theme} />
            </>
          }
        />
      </Routes>
    </ReactLenis>
  );
};

export default App;
