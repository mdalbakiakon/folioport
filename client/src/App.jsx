import { ReactLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import Identity from "./pages/Identity";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
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
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
