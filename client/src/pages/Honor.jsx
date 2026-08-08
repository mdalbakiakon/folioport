import React from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import { SEO_CONFIG } from "../config/seo.js";

const Honor = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <SEO {...SEO_CONFIG.honor} />
      <section>
        <h1 className="font-head-style text-left">
          {isHome ? "dignity" : "Honor"}
        </h1>
      </section>
    </>
  );
};

export default Honor;
