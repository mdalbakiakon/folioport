import { ReactLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Archive from "./pages/Archive";
import Identity from "./pages/Identity";

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
      <Navbar
        handleThemeDark={handleThemeDark}
        handleThemeLight={handleThemeLight}
        theme={theme}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
