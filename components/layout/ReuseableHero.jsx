import React from "react";
import Image from "next/image";
import FeatureBar from "./FeatureBar";

function ReuseableHero({ heading, text, img }) {
  return (
    <section className="w-full bg-gray-100 py-12 lg:pt-40 pt-12 lg:px-12 px-0">
      <div className="w-full">
        <div className="group relative md:h-[60vh] h-[50vh] md:rounded-2xl overflow-hidden flex flex-col md:justify-end justify-center w-full">
          {" "}
          {/* Background Image */}{" "}
          <Image
            src="/about-hero.png"
            alt="whyUs"
            fill
            className=" object-cover"
          />{" "}
          {/* Dark Overlay */}{" "}
          <div className="absolute inset-0 bg-green/70 transition-all duration-500" />
          {/* Content */}{" "}
          <div className="relative z-10 lg:p-10 p-5 text-white flex flex-col md:items-start items-center gap-2">
            <div
              className=" w-fit
    flex items-center p-1 px-4 mb-1 rounded-full text-xs text-white
    bg-white/10
    backdrop-blur-md
    border border-white/20
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_20px_rgba(0,0,0,0.1)]
  "
            >
              Est. 2015 · Family-Run
            </div>
            <p className="md:text-5xl text-3xl font-extrabold poppins max-w-2xl md:leading-14 md:text-start text-center">
              {heading}
            </p>{" "}
            <p className="text-base leading-6 max-w-2xl md:text-start text-center">
              {" "}
              {text}
            </p>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Feature Bar */}
      <div className="hidden lg:block">
        <FeatureBar />
      </div>
    </section>
  );
}

export default ReuseableHero;
