import { ReactLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Archive from "./pages/Archive";
import Identity from "./pages/Identity";
import Contact from "./pages/Contact";
import Copyright from "./components/Copyright";
import Testimonials from "./pages/Testimonials";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      <Navbar
        handleThemeDark={handleThemeDark}
        handleThemeLight={handleThemeLight}
        theme={theme}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {isHome ? <Copyright /> : ""}
    </>
  );
};

export default App;
