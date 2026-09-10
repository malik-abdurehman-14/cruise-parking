import React from "react";
import Image from "next/image";

function WhyUs() {
  return (
    <section className="w-full flex flex-col gap-10 bg-gray-100 py-14 px-12">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <p className="text-sm text-green uppercase">Our promise</p>
        <p className="text-5xl font-extrabold poppins text-center">
          Why Choose <span className="text-green">Us</span>
        </p>
        <p className="max-w-sm text-center text-base">
          Simple, honest service from a team who genuinely care about your
          experience.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="group relative sm:h-[350px] h-[250px] rounded-2xl overflow-hidden flex flex-col justify-end">
          {" "}
          {/* Background Image */}{" "}
          <Image
            src="/whyUs.jpg"
            alt="whyUs"
            fill
            className=" object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
          />{" "}
          {/* Dark Overlay */}{" "}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D727E]/90 via-[#1D727E]/30 to-transparent transition-all duration-500" />
          {/* Content */}{" "}
          <div className="relative z-10 p-4 text-white flex flex-col">
            {" "}
            <p className="text-xl font-semibold">Secure & Insured</p>{" "}
            <p className="text-sm leading-6">
              {" "}
              Gated compound with CCTV surveillance, full vehicle insurance, and
              on-site staff — every day, all year round.
            </p>{" "}
          </div>{" "}
        </div>
        <div className="w-full flex gap-4">
          <div className="group relative sm:h-[350px] h-[250px] rounded-2xl overflow-hidden flex flex-col justify-end w-full">
            {" "}
            {/* Background Image */}{" "}
            <Image
              src="/whyUs2.jpg"
              alt="whyUs"
              fill
              className=" object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
            />{" "}
            {/* Dark Overlay */}{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D727E]/90 via-[#1D727E]/30 to-transparent transition-all duration-500" />
            {/* Content */}{" "}
            <div className="relative z-10 p-4 text-white flex flex-col">
              {" "}
              <p className="text-xl font-semibold">Easy Port Transfer</p>{" "}
              <p className="text-sm leading-6">
                {" "}
                Complimentary shuttle runs directly to Southampton cruise
                terminals. No taxis, no stress, right on schedule.
              </p>{" "}
            </div>{" "}
          </div>
          <div className="group relative sm:h-[350px] h-[250px] rounded-2xl overflow-hidden flex flex-col justify-end w-full">
            {" "}
            {/* Background Image */}{" "}
            <Image
              src="/whyUs3.jpg"
              alt="whyUs"
              fill
              className=" object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
            />{" "}
            {/* Dark Overlay */}{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D727E]/90 via-[#1D727E]/30 to-transparent transition-all duration-500" />
            {/* Content */}{" "}
            <div className="relative z-10 p-4 text-white flex flex-col">
              {" "}
              <p className="text-xl font-semibold">Trusted by Cruisers</p>{" "}
              <p className="text-sm leading-6">
                {" "}
                Family-run for over 12 years. Thousands of 5-star reviews from
                real travellers who come back year after year.
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
