import React from "react";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <section>
      <h1 className="font-head-style text-left">
        {isHome ? "Reputation" : "Testimonials"}
      </h1>
    </section>
  );
};

export default Testimonials;
