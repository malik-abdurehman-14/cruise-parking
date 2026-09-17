import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

function Cta() {
  return (
    <section className="w-full sm:py-14 pb-14 lg:px-12 px-6 bg-gray-100">
      <div className="w-full">
        <div className="group relative sm:h-[380px] h-[360px] rounded-2xl overflow-hidden flex flex-col justify-end w-full">
          {" "}
          {/* Background Image */}{" "}
          <Image
            src="/cta.png"
            alt="whyUs"
            fill
            className=" object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
          />{" "}
          {/* Dark Overlay */}{" "}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-all duration-500" />
          {/* Content */}{" "}
          <div className="relative z-10 p-6 text-white flex flex-col gap-2">
            <p className="md:text-5xl text-3xl font-extrabold poppins max-w-xl md:leading-14">
              Discover your{" "}
              <span className="text-[#09DCE2]"> Cruise Parking </span>{" "}
              Southampton rate today
            </p>{" "}
            <p className="text-sm leading-6 max-w-xl mb-2">
              {" "}
              Find the best rates for secure cruise parking in Southampton with
              easy booking and shuttle services
            </p>{" "}
            <div>
              <Button
                title="Check Availability"
                variant="light"
                padding="py-2 px-5"
                className="rounded-full"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default Cta;
