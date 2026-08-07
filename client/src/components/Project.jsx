import React from "react";

const Project = () => {
  return (
    <div className="w-full h-100 px-1.25 flex justify-center items-center gap-1.25 max-[909px]:flex-col">
      <div className="h-full flex-1 w-full hover:flex-[1.5] transition-all duration-700 ease-in-out rounded-4xl overflow-hidden relative cursor-pointer group">
        <img
          src="/interior_main.jpg"
          alt=""
          className="w-full h-full object-center object-cover relative z-0"
        />

        {/* hover overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 bg-[linear-gradient(to_top_right,var(--bg-main)_0%,transparent_50%)] transition-all duration-700 ease-in-out rounded-4xl group-hover:opacity-100">
          <div className="w-full h-full relative">
            <div className="absolute bottom-3.5 left-5">
              <h2 className="text-(--txt-main)">architect.io</h2>
              <h3 className="text-(--txt-sec) text-sm">
                AI full stack (MERN) webapp turns your idea into 2D architecture
                plan
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd project */}
      <div className="h-full w-full flex-1 hover:flex-[1.5] transition-all duration-700 ease-in-out rounded-4xl overflow-hidden relative cursor-pointer group">
        <img
          src="https://designshack.net/wp-content/uploads/Dark-MacBook-Mockup-1024x682.jpg"
          alt=""
          className="w-full h-full object-center object-cover relative z-0"
        />

        {/* hover overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 bg-[linear-gradient(to_top_right,var(--bg-main)_0%,transparent_50%)] transition-all duration-700 ease-in-out rounded-4xl group-hover:opacity-100">
          <div className="w-full h-full relative">
            <div className="absolute bottom-3.5 left-5">
              <h2 className="text-(--txt-main)">architect.io</h2>
              <h3 className="text-(--txt-sec) text-sm">
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
