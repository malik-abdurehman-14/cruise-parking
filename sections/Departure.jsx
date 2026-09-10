import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Departure() {
  const imgs = ["/location1.png", "/location2.png", "/location3.png"];

  return (
    <section className="w-full flex flex-col gap-8 bg-[#F8FEFF] py-16 px-12">
      <div className="flex items-center gap-10 justify-between w-full">
        <div className="flex flex-col gap-3 max-w-2xl">
          <p className="text-sm text-green uppercase">
            GO FURTHER, PARK CLOSER
          </p>
          <p className="text-5xl font-extrabold poppins">
            Your Next Departure,
            <span className="text-green"> Covered</span>
          </p>
          <p className="text-base">
            From early flights to summer sailings, find a secure place to leave
            your car at the UK hubs that move you.
          </p>
        </div>
        <a
          href="#"
          className="text-green text-lg font-bold flex items-center gap-1"
        >
          Search all locations <FaArrowRightLong size={16} />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {imgs.map((item, index) => (
          <img
            className="h-[450px] w-full object-cover rounded-2xl"
            key={index}
            src={item}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default Departure;
