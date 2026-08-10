import React from "react";

const Project = () => {
  return (
    <>
      <div className="w-full h-fit px-1.25 flex justify-center items-center gap-1 flex-col md:flex-row [overflow-anchor:none]">
        <div className="md:h-75 xl:h-87.5 h-62.5 md:flex-1 w-full md:hover:flex-2 md:transition-[flex-grow] md:will-change-[flex-grow] duration-750 ease-in-out rounded-4xl overflow-hidden cursor-pointer sticky top-22 transform:translateZ(0)">
          <img
            src="/interior_main.jpg"
            alt=""
            className="w-full h-full object-center object-cover relative z-0 select-none"
          />

          {/* hover overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-10 opacity-100 bg-[linear-gradient(to_top_right,#000000_0%,transparent_100%)] transition-all duration-750 ease-in-out rounded-4xl select-none">
            <div className="w-full h-full relative">
              <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)]">
                <h2 className="text-[#d3d3d3] select-text">architect.io</h2>
                <h3 className="text-[#606060] project-description line-clamp-1 text-ellipsis select-text">
                  AI full stack (MERN) webapp turns your idea into 2D
                  architecture plan
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd project */}
        <div className="md:h-75 xl:h-87.5 h-62.5 md:flex-1 w-full md:hover:flex-2 md:transition-[flex-grow] md:will-change-[flex-grow] duration-750 ease-in-out rounded-4xl overflow-hidden cursor-pointer sticky top-22 transform:translateZ(0)">
          <img
            src="https://designshack.net/wp-content/uploads/Dark-MacBook-Mockup-1024x682.jpg"
            alt=""
            className="w-full h-full object-center object-cover relative z-0 select-none"
          />

          {/* hover overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-10 opacity-100 bg-[linear-gradient(to_top_right,#000000_0%,transparent_100%)] transition-all duration-750 ease-in-out rounded-4xl select-none">
            <div className="w-full h-full relative">
              <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)]">
                <h2 className="text-[#d3d3d3] select-text">architect.io</h2>
                <h3 className="text-[#606060] project-description line-clamp-1 text-ellipsis select-text">
                  AI full stack (MERN) webapp turns your idea into 2D
                  architecture plan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* case study */}
      <div className="mt-25 w-full h-fit flex flex-col justify-center items-start gap-2.5 px-1.25">
        <h2 className="mb-2.5 select-none">Case Study</h2>
      </div>
    </>
  );
};

export default Project;
