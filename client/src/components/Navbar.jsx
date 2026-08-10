import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, GamepadDirectional } from "lucide-react";
import MobileNav from "./MobileNav";
import ScrollToTop from "./ScrolltoTop";
import { useLenis } from "lenis/react";

const Navbar = ({ handleThemeDark, handleThemeLight, theme }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isIdentity = location.pathname === "/identity";
  const isArchive = location.pathname === "/archive";
  const isHonor = location.pathname === "/honor";
  const isContact = location.pathname === "/contact";

  const lenis = useLenis();

  const handleScrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const [isMenuClick, setIsMenuClick] = useState(false);

  const handleMobileMenu = () => {
    isMenuClick === false ? setIsMenuClick(true) : setIsMenuClick(false);
  };

  return (
    <header className="sticky top-0 bg-(--bg-main) w-full h-19.5 flex flex-col justify-center items-center z-50 select-none">
      <div className="w-[calc(100%-20px)] h-full mx-auto border-b-2 border-(--txt-ter) flex justify-center items-center">
        <Link
          onClick={() => (isHome ? handleScrollTop() : null)}
          to="/"
          className="relative w-7.5 h-10 flex items-center justify-center"
        >
          <img
            src="/logo-light.svg"
            alt="Md. Al Baki Akon - Portfolio Logo"
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-7.5 py-1.25 transition-opacity duration-750 ease-in-out ${
              theme === "dark" ? "opacity-0" : "opacity-100"
            }`}
          />

          <img
            src="/logo-dark.svg"
            alt="Md. Al Baki Akon - Portfolio Logo"
            className={`absolute w-7.5 py-1.25 transition-opacity duration-750 ease-in-out ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>
      </div>

      <div className="w-[calc(100%-20px)] h-9 mx-auto border-b-2 border-(--txt-ter) py-1.25 flex justify-center items-center relative">
        <nav className="flex justify-center items-center gap-4.5 text-(--txt-sec) max-[529px]:hidden ">
          <Link
            to="/"
            className={`${isHome ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
          >
            Home
          </Link>
          <Link
            to="/identity"
            className={`${isIdentity ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
          >
            Identity
          </Link>
          <Link
            to="/archive"
            className={`${isArchive ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
          >
            Archive
          </Link>
          <Link
            to="/honor"
            className={`${isHonor ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
          >
            Honor
          </Link>
          <Link
            to="/contact"
            className={`${isContact ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
          >
            Contact
          </Link>
        </nav>

        <button
          aria-label="menu navbar button"
          onClick={handleMobileMenu}
          className="h-full flex justify-center items-center min-[529px]:hidden p-px"
        >
          <GamepadDirectional
            className={`h-full text-(--txt-sec) duration-700 ease-in-out transition-all ${isMenuClick === true ? "rotate-45" : ""}`}
          />
        </button>

        {isMenuClick && (
          <MobileNav
            isHome={isHome}
            isIdentity={isIdentity}
            isArchive={isArchive}
            isHonor={isHonor}
            isContact={isContact}
            handleMobileMenu={handleMobileMenu}
            theme={theme}
          />
        )}

        <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-x-1.25 p-px">
          <Sun
            aria-label="light theme button"
            onClick={handleThemeLight}
            className={`h-2/3 cursor-pointer ${theme === "light" ? "text-(--txt-main)" : "text-(--txt-sec)"}`}
            fill={theme === "light" ? "#121212" : "none"}
          />
          <Moon
            aria-label="dark theme button"
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
