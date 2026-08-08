import React from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import { SEO_CONFIG } from "../config/seo.js";

const Contact = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <SEO {...SEO_CONFIG.contact} />
      <section className="flex flex-col">
        <h2 className="font-head-style text-left">
          {isHome ? "Find us" : "Contact"}
        </h2>
      </section>
    </>
  );
};

export default Contact;
