import React from "react";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

const Identity = ({theme}) => {
  const now = dayjs();
  const currYear = now.format("YYYY");
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <section>
        {/* section head tag */}
        <h1 className="font-head-style text-left">
          {isHome ? (
            <>
              Portfolio <br />
              Website
            </>
          ) : (
            "Identity"
          )}
        </h1>

        {/* hero section */}
        <div className="w-full h-fit flex justify-between items-start gap-2.5 px-1.25 rank-container">
          <img
            src="/dp.webp"
            alt="Md. Al Baki Akon - Full Stack Software Engineer"
            loading="eager"
            className="w-30 aspect-square rounded-3xl object-center object-cover -scale-x-100 select-none"
          />
          <div className="flex-1">Md. Al Baki Akon</div>
          <div className="flex-3 flex flex-col gap-3.5 justify-center items-start">
            <div className="flex flex-col text-(--txt-sec)">
              <h2 className="text-(--txt-main) select-none">Services</h2>
              <span>Full Stack Web Development (MERN)</span>
              <span>Frontend Engineering</span>
              <span>Backend & API Development</span>
              <span>UI/UX Design</span>
              <span>Product Design</span>
            </div>
            <div className="flex flex-col text-(--txt-sec)">
              <h2 className="text-(--txt-main) select-none">Also</h2>
              <span>AI/ML Research</span>
            </div>
          </div>
          <div className="flex-1 text-(--txt-sec) text-right max-[909px]:hidden">
            <span className="font-head text-lg text-(--txt-ter) leading-[0.75]">
              {currYear}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Identity;
