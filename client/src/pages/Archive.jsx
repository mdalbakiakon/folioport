import React from "react";
import { useLocation } from "react-router-dom";

const Archive = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <section>
      <h1 className="font-head-style text-left">
        {isHome ? "Case Studies" : "Archive"}
      </h1>
    </section>
  );
};

export default Archive;
