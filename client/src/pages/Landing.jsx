import dayjs from "dayjs";
import React from "react";

const Landing = () => {
  const now = dayjs();
  const currYear = now.format("YYYY");
  return (
    <section>
      {/* section head tag */}
      <h1 className="font-head-style text-left">Portfolio website</h1>

      {/* hero section */}
      <div className="w-full h-fit flex justify-between items-start gap-2.5 px-1.25">
        <img
          src="/dp.jpg"
          alt="Md. Al Baki Akon - Full Stack Software Engineer"
          loading="eager"
          className="w-30 aspect-square rounded-3xl object-center object-cover -scale-x-100"
        />
        <div className="flex-1">Md. Al Baki Akon</div>
        <div className="flex-3 flex flex-col gap-3.5 justify-center items-start">
          <div className="flex flex-col">
            <h2 className="text-(--txt-sec)">Services</h2>
            <span>Full Stack Web Development (MERN)</span>
            <span>Frontend Engineering</span>
            <span>Backend & API Development</span>
            <span>UI/UX Design</span>
            <span>Product Design</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-(--txt-sec)">Also</h2>
            <span>AI Researcher</span>
          </div>
        </div>
        <div className="flex-1 text-(--txt-sec) text-right">
          <span className="font-head text-lg">{currYear}</span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
