import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ handleThemeDark, handleThemeLight, theme }) => {
  return (
    <header className="sticky top-0 bg-(--bg-main) w-full h-19.5 flex flex-col justify-center items-center z-50">
      <div className="w-[calc(100%-20px)] mx-auto  border-b-2 border-(--txt-ter) flex justify-center items-center">
        <Link to="/">
          <img
            src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="Portfolio Logo"
            className="w-7.5 py-1.25"
          />
        </Link>
      </div>
      <div className="w-[calc(100%-20px)] mx-auto border-b-2 border-(--txt-ter) py-1.25 flex justify-center items-center relative">
        <div className="flex justify-center items-center gap-2.5 text-(--txt-sec)">
          <Link to="/" className="hover:text-(--txt-main)">
            Home
          </Link>
          <Link to="/identity" className="hover:text-(--txt-main)">
            Identity
          </Link>
          <Link to="/work" className="hover:text-(--txt-main)">
            Work
          </Link>
        </div>

        <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-x-1.25 p-px">
          <Sun
            onClick={handleThemeLight}
            className={`h-2/3 ${theme === "light" ? "text-(--txt-main)" : "text-(--txt-sec)"}`}
            fill={theme === "light" ? "#000000" : "none"}
          />
          <Moon
            onClick={handleThemeDark}
            className={`h-2/3 ${theme === "dark" ? "text-(--txt-main)" : "text-(--txt-sec)"}`}
            fill={theme === "dark" ? "#d3d3d3" : "none"}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
