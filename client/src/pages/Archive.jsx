import { GitCommit } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import Research from "../components/Research";
import Project from "../components/Project";

const Archive = ({theme}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <section>
        <h2 className="font-head-style text-left">
          {isHome ? "Builds" : "Archive"}
        </h2>

        <div className="flex-1 w-full flex flex-col justify-between items-center gap-50">
          {/* projecct section */}
          <div className="w-full">
            <h2 className="text-(--txt-main) px-1.25 mb-2.5">Case Project</h2>
            <Project />
          </div>

          {/* research section */}
          <div>
            <h2 className="text-(--txt-main) px-1.25 mb-2.5">Case Research</h2>
            <Research />
          </div>
        </div>
      </section>
    </>
  );
};

export default Archive;
