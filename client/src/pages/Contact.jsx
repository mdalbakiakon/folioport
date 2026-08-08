import React from "react";
import { useLocation } from "react-router-dom";

const Contact = ({theme}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <section className="flex flex-col">
        <h2 className="font-head-style text-left">
          {isHome ? "Find us" : "Contact"}
        </h2>
      </section>
    </>
  );
};

export default Contact;
