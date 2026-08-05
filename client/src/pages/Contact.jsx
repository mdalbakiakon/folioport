import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <section>
      <h2 className="font-head-style text-left">
        {isHome ? "Find us" : "Contact"}
      </h2>

    </section>
  );
};

export default Contact;
