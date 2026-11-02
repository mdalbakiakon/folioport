import Image from "next/image";
import { HeadTxt } from "./HeadTxt";
import { Year } from "./Year";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--navbar-h)-2*var(--body-pad))] flex flex-col">
      <HeadTxt headline1="Portfolio" headline2="Website" />

      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-2">
        <div className="w-30 aspect-square relative rounded-4xl overflow-hidden select-none">
          <Image
            src="/hero.webp"
            alt="Md. Al Baki Akon"
            priority
            fill
            sizes="(max-width: 768px) 120px, 480px"
            className="object-center object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>

        <h2 className="flex-1 select-none text-body-style">Md. Al Baki Akon</h2>
        <div className="flex-3 flex flex-col gap-5 justify-center items-start">
          <div className="flex flex-col">
            <h2 className="select-none text-body-style">Services</h2>
            <span>Software Engineer</span>
            <span>Full Stack Web Development [MERN]</span>
            <span>Frontend Engineering</span>
            <span>Backend & API Development</span>
            <span>UI/UX Design</span>
            <span>Product Design</span>
          </div>
          <div className="flex flex-col">
            <h2 className="select-none text-body-style">Also</h2>
            <span>AI/ML Research</span>
          </div>
        </div>
        <span className="select-none text-body-style">
          <Year />
        </span>
      </div>

      <div className="w-full h-full flex-1 flex justify-start md:justify-center items-end gap-0 pb-5 mt-7.5">
        <Button size="md">Resume</Button>
        <Button variant="secondary" size="md">
          Contact
        </Button>
      </div>
    </section>
  );
}
