import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 250);
    return () => clearTimeout(timer);
  }, []);

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

    </section>
  );
};

export default MobileNav;