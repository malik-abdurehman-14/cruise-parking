import React from "react";
import Image from "next/image";
import FeatureBar from "./FeatureBar";

function ReuseableHero() {
  return (
    <section className="w-full bg-gray-100 py-12 pt-40 px-12">
      <div className="w-full">
        <div className="group relative h-[60vh] rounded-2xl overflow-hidden flex flex-col justify-end w-full">
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
          <div className="relative z-10 p-10 text-white flex flex-col gap-2">
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
            <p className="text-5xl font-extrabold poppins max-w-xl leading-14">
              We Look After Your Car Like It's Our Own
            </p>{" "}
            <p className="text-base leading-6 max-w-2xl">
              {" "}
              Family-run since 2015 · Southampton's most trusted cruise parking
              service. Start your holiday knowing everything is safe.
            </p>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Feature Bar */}
      <FeatureBar />
    </section>
  );
}

export default ReuseableHero;
