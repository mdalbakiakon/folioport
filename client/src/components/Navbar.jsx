import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, GamepadDirectional } from "lucide-react";

const Navbar = ({ handleThemeDark, handleThemeLight, theme }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isIdentity = location.pathname === "/identity";
  const isArchive = location.pathname === "/archive";
  const isTestimonials = location.pathname === "/testimonials";
  const isContact = location.pathname === "/contact";

  return (
    <header className="sticky top-0 bg-(--bg-main) w-full h-19.5 flex flex-col justify-center items-center z-50">
      <div className="w-[calc(100%-20px)] h-full mx-auto  border-b-2 border-(--txt-ter) flex justify-center items-center">
        <Link to="/">
          <img
            src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="Portfolio Logo"
            className="w-7.5 py-1.25"
          />
        </Link>
      </div>

      <div className="w-[calc(100%-20px)] h-9 mx-auto border-b-2 border-(--txt-ter) py-1.25 flex justify-center items-center relative">
        <nav className="flex justify-center items-center gap-3.5 text-(--txt-sec) max-[529px]:hidden ">
          <Link to="/" className={`${isHome ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}>
            Home
          </Link>
          <Link to="/identity" className={`${isIdentity ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}>
            Identity
          </Link>
          <Link to="/archive" className={`${isArchive ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}>
            Archive
          </Link>
          <Link to="/testimonials" className={`${isTestimonials ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}>
            Honor
          </Link>
          <Link to="/contact" className={`${isContact ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}>
            Contact
          </Link>
        </nav>

        <span className="h-full flex justify-center items-center min-[529px]:hidden"><GamepadDirectional className="h-full text-(--txt-sec) hover:rotate-45 duration-700 ease-in-out transition-all"/></span>

        <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-x-1.25 p-px">
          <Sun
            onClick={handleThemeLight}
            className={`h-2/3 cursor-pointer ${theme === "light" ? "text-(--txt-main)" : "text-(--txt-sec)"}`}
            fill={theme === "light" ? "#000000" : "none"}
          />
          <Moon
            onClick={handleThemeDark}
            className={`h-2/3 cursor-pointer ${theme === "dark" ? "text-(--txt-main)" : "text-(--txt-sec)"}`}
            fill={theme === "dark" ? "#d3d3d3" : "none"}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
