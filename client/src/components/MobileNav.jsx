import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({
  isHome,
  isIdentity,
  isArchive,
  isHonor,
  isContact,
  handleMobileMenu,
  theme,
}) => {
  return (
    <section className="w-full bg-(--bg-main) text-(--txt-main) flex justify-center items-center fixed top-19.5 left-0">
      <nav className="flex-col justify-center items-center gap-4.5 text-(--txt-sec) max-[529px]:flex relative z-20">
        <Link
          onClick={handleMobileMenu}
          to="/"
          className={`${isHome ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
        >
          Home
        </Link>
        <Link
          onClick={handleMobileMenu}
          to="/identity"
          className={`${isIdentity ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
        >
          Identity
        </Link>
        <Link
          onClick={handleMobileMenu}
          to="/archive"
          className={`${isArchive ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
        >
          Archive
        </Link>
        <Link
          onClick={handleMobileMenu}
          to="/honor"
          className={`${isHonor ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
        >
          Honor
        </Link>
        <Link
          onClick={handleMobileMenu}
          to="/contact"
          className={`${isContact ? "text-(--txt-main)" : ""} hover:text-(--txt-main)`}
        >
          Contact
        </Link>
      </nav>

      <img
        src="/logo-light.svg"
        alt="Portfolio Logo"
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2/3 py-1.25 z-10 transition-opacity blur-sm duration-50 ease-in-out ${
          theme === "dark" ? "opacity-0" : "opacity-85"
        }`}
      />

      <img
        src="/logo-dark.svg"
        alt="Portfolio Logo"
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2/3 py-1.25 z-10 transition-opacity blur-sm duration-50 ease-in-out ${
          theme === "dark" ? "opacity-50" : "opacity-0"
        }`}
      />
    </section>
  );
};

export default MobileNav;
