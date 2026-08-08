import { ReactLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Archive from "./pages/Archive";
import Identity from "./pages/Identity";
import Contact from "./pages/Contact";
import Copyright from "./components/Copyright";
import Honor from "./pages/Honor";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("baki-portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("baki-portfolio-theme", theme);
  }, [theme]);

  const handleThemeDark = () => {
    theme === "light" ? setTheme("dark") : "";
  };

  const handleThemeLight = () => {
    theme === "dark" ? setTheme("light") : "";
  };

  return (
    <>
      {/* lenis scroll */}
      <ReactLenis root />
      <main>
        <Routes>
          <Route
            element={
              <Layout
                handleThemeDark={handleThemeDark}
                handleThemeLight={handleThemeLight}
                theme={theme}
              />
            }
          >
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/honor" element={<Honor />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<PageNotFound theme={theme}/>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
