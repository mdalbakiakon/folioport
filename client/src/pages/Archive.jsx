import { GitCommit } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import Research from "../components/Research";

const Archive = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <section>
      <h1 className="font-head-style text-left">
        {isHome ? "Builds" : "Archive"}
      </h1>

      {/* research section */}
      <Research />
    </section>
  );
};

export default Archive;
