"use client";

import React from "react";
import Image from "next/image";

function OurTeam() {
  const team = [
    {
      img: "/team1.jpg",
      name: "Emma",
      position: "Founder",
      about: "Started it all from a 20-space lot in 2015.",
    },
    {
      img: "/team2.jpg",
      name: "Kevin",
      position: "Operations Lead",
      about: "Makes sure your car is ready the moment you land.",
    },
    {
      img: "/team3.jpg",
      name: "Sarah",
      position: "Customer Care",
      about: "The friendly voice you hear when you call.",
    },
    {
      img: "/team4.jpg",
      name: "James",
      position: "Shuttle Driver",
      about: "Knows every shortcut to the terminal.",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-9 bg-[#F8FEFF] py-16 px-12">
      <div className="flex flex-col gap-3 items-center justify-center w-full">
        <p className="text-sm text-green uppercase">
          THE PEOPLE BEHIND THE SERVICE
        </p>
        <p className="text-5xl font-extrabold poppins">Meet the Team</p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {team.map((item, index) => (
          <div
            key={index}
            className="group relative sm:h-[400px] h-[250px] rounded-2xl overflow-hidden flex flex-col justify-end w-full"
          >
            {" "}
            {/* Background Image */}{" "}
            <Image
              src={item.img}
              alt="whyUs"
              fill
              className=" object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
            />{" "}
            {/* Dark Overlay */}{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D727E]/90 via-[#1D727E]/30 to-transparent transition-all duration-500" />
            {/* Content */}{" "}
            <div className="relative z-10 p-4 text-white flex flex-col">
              {" "}
              <p className="text-xl font-semibold">{item.name}</p>{" "}
              <p className="text-sm leading-6"> {item.position}</p>{" "}
              <p className="text-sm leading-5"> {item.about}</p>{" "}
            </div>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
