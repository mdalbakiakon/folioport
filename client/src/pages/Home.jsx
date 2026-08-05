import React from "react";
import Work from "./Archive";
import Identity from "./Identity";
import Archive from "./Archive";
import Contact from "./Contact";
import Copyright from "../components/Copyright";
import Testimonials from "./Testimonials";

const Home = ({ theme }) => {
  return (
    <>
      <Identity />

      {/* portfolio version */}
      <section className="flex flex-col justify-start items-center">
        <h2 className="font-head text-center text-3xl text-(--txt-ter) leading-[0.75]">
          8.0
        </h2>
        <h3 className="text-(--txt-main)">Portfolio Mark</h3>
        <p className="mt-2.5 text-(--txt-sec) w-full max-w-7xl mx-auto text-center">
          I am a Full Stack Software Engineer specializing in the MERN stack,
          with a dedicated focus on architecting clean, scalable, and performant
          web applications from initial concept through deployment. Alongside
          development, I am actively engaged in AI research, working toward more
          reliable and trustworthy large language models. My approach is
          grounded in thoughtful UI/UX design, disciplined and maintainable
          code, and a commitment to building products that perform as well as
          they are experienced.
        </p>
      </section>

      <Archive />

      {/* building since */}
      <section className="flex flex-col justify-center items-center">
        <h3 className="font-head text-center text-3xl text-(--txt-ter) leading-[0.75]">
          2022
        </h3>
        <h4 className="text-(--txt-main)">Since</h4>
      </section>

      <Testimonials />

      {/* branding */}
      <section className="flex flex-col justify-center items-center">
        <img
          src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Portfolio Logo"
          className="w-12.5"
        />
      </section>

      <Contact />
    </>
  );
};

export default Home;
