import React from "react";

const PageNotFound = ({theme}) => {
  return (
    <div className="w-full h-dvh p-1.25 relative">
      <h1 className="font-head-style text-left">404</h1>
      <h2 className="px-1.25">Page not found</h2>


      <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
        <img
          src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Portfolio Logo"
          className="w-7.5 py-1.25"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
