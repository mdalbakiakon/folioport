import React from "react";

const Project = () => {
  return (
    <div className="w-full h-fit px-1.25 flex justify-center items-center gap-1 [@media(hover:none)]:flex-col">
      <div className="h-100 [@media(hover:none)]:h-75 flex-1 w-full hover:flex-2 transition-[flex-grow] will-change-[flex-grow] duration-750 ease-in-out rounded-4xl overflow-hidden cursor-pointer group sticky top-22">
        <img
          src="/interior_main.jpg"
          alt=""
          className="w-full h-full object-center object-cover relative z-0"
        />

        {/* hover overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 [@media(hover:none)]:opacity-100 opacity-0 bg-[linear-gradient(to_top_right,#000000_0%,transparent_100%)] transition-all duration-750 ease-in-out rounded-4xl group-hover:opacity-100">
          <div className="w-full h-full relative">
            <div className="absolute bottom-3.5 left-5">
              <h2 className="text-[#d3d3d3]">architect.io</h2>
              <h3 className="text-[#606060] project-description line-clamp-2 text-ellipsis">
                AI full stack (MERN) webapp turns your idea into 2D architecture
                plan
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd project */}
      <div className="h-100 [@media(hover:none)]:h-75 w-full flex-1 hover:flex-2 transition-[flex-grow] will-change-[flex-grow] duration-750 ease-in-out rounded-4xl overflow-hidden cursor-pointer group sticky top-22 z-30">
        <img
          src="https://designshack.net/wp-content/uploads/Dark-MacBook-Mockup-1024x682.jpg"
          alt=""
          className="w-full h-full object-center object-cover relative z-0"
        />

        {/* hover overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 [@media(hover:none)]:opacity-100 opacity-0 bg-[linear-gradient(to_top_right,#000000_0%,transparent_100%)] transition-all duration-750 ease-in-out rounded-4xl group-hover:opacity-100">
          <div className="w-full h-full relative">
            <div className="absolute bottom-3.5 left-5">
              <h2 className="text-[#d3d3d3]">architect.io</h2>
              <h3 className="text-[#606060] project-description line-clamp-2 text-ellipsis">
                AI full stack (MERN) webapp turns your idea into 2D architecture
                plan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
