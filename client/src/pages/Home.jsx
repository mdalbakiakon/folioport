import React from "react";
import Work from "./Archive";
import Identity from "./Identity";
import Archive from "./Archive";
import Contact from "./Contact";
import Copyright from "../components/Copyright";
import Honor from "./Honor";
import SkillHexagon from "../components/SkillHexagon";
import SEO from "../components/SEO";
import { SEO_CONFIG } from "../config/seo.js";

const Home = ({ theme }) => {
  return (
    <>
      {/* seo */}
      <SEO {...SEO_CONFIG.home} theme={theme} />

      <Identity />

      {/* portfolio version */}
      <section className="flex flex-col justify-start items-center">
        <div className="flex flex-col justify-center items-center p-1.25">
          <h2 className="font-head text-center text-3xl text-(--txt-ter) max-[439px]:text-base">
            8.0
          </h2>
          <h3 className="text-(--txt-main)">Portfolio Mark</h3>
          <p className="mt-3.5 text-(--txt-sec) w-full max-w-7xl mx-auto text-center">
            I am a Full Stack Software Engineer specializing in the MERN stack,
            with a dedicated focus on architecting clean, scalable, and
            performant web applications from initial concept through deployment.
            Alongside development, I am actively engaged in AI research, working
            toward more reliable and trustworthy large language models. My
            approach is grounded in thoughtful UI/UX design, disciplined and
            maintainable code, and a commitment to building products that
            perform as well as they are experienced.
          </p>
        </div>

        <SkillHexagon />
      </section>

      <Archive />

      {/* branding */}
      <div className="flex flex-col justify-center items-center h-[calc(100dvh-78px)] p-2.5">
        <div className="w-full h-full rounded-4xl xl:rounded-[50px] overflow-hidden relative">
          <img
            src="/branding.jpg"
            alt="Md. Al Baki Akon - Portfolio Branding Image"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-center object-cover"
          />

          {/* overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,#121212_100%)]"></div>
        </div>

        <img
          src="/logo-light.svg"
          alt="Portfolio Logo"
          className={`absolute w-7.5 py-1.25 transition-opacity duration-750 ease-in-out ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src="/logo-dark.svg"
          alt="Portfolio Logo"
          className={`absolute w-7.5 py-1.25 transition-opacity duration-750 ease-in-out ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <Honor />

      {/* building since */}
      <section className="flex flex-col justify-center items-center">
        <h2 className="font-head text-center text-3xl text-(--txt-ter) leading-[0.75] max-[439px]:text-base">
          2022
        </h2>
        <h3 className="text-(--txt-main)">Since</h3>
      </section>

      <Contact />
      <Copyright />
    </>
  );
};

export default Home;
