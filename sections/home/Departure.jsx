import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Departure() {
  const imgs = ["/location1.png", "/location2.png", "/location3.png"];

  return (
    <section className="w-full flex flex-col gap-8 bg-[#F8FEFF] py-16 lg:px-12 px-6">
      <div className="flex items-center gap-10 justify-between w-full">
        <div className="flex flex-col gap-3 lg:justify-start justify-center lg:items-start items-center lg:max-w-2xl w-full">
          <p className="text-sm text-green uppercase">
            GO FURTHER, PARK CLOSER
          </p>
          <p className="md:text-5xl text-3xl font-extrabold poppins text-center lg:text-start">
            Your Next Departure,
            <span className="text-green"> Covered</span>
          </p>
          <p className="text-base text-center lg:text-start">
            From early flights to summer sailings, find a secure place to leave
            your car at the UK hubs that move you.
          </p>
        </div>
        <a
          href="#"
          className="text-green hidden lg:flex text-lg font-bold items-center gap-1"
        >
          Search all locations <FaArrowRightLong size={16} />
        </a>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {imgs.map((item, index) => (
          <img
            className="lg:h-[450px] h-[250px] w-full object-cover rounded-2xl"
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
