import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ handleThemeDark, handleThemeLight, theme }) => {
  return (
    <>
      <Navbar
        handleThemeDark={handleThemeDark}
        handleThemeLight={handleThemeLight}
        theme={theme}
      />
      <Outlet />
    </>
  );
};

export default Layout;
