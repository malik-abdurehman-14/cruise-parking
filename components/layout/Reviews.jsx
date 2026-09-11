import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const data = [
    {
      img: "/review1.jpg",
      name: "Sarah & James Whitfield",
      position: "Southampton → Mediterranean Cruise",
      review:
        "From the moment we pulled in, it felt like a hotel valet service. The shuttle had us at the terminal in minutes, and coming home our car was waiting, warm and clean. We will never park anywhere else.",
    },
    {
      img: "/review2.jpg",
      name: "David Okonkwo",
      position: "Gatwick — Frequent Business Traveller",
      review:
        "I travel for work every fortnight and have tried every car park at Gatwick. Meridian is the only one that treats your car like it is their own. Faultless, every single time.",
    },
    {
      img: "/review3.jpg",
      name: "Margaret Ellison",
      position: "Dover → Norwegian Fjords",
      review:
        "We were nervous leaving the car for two weeks, but the staff were so reassuring. Photos of the secure compound, a friendly face on return — it is the little things that make this special.",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 bg-gray-100 py-14 px-12">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <p className="text-sm text-green uppercase">Reviews</p>
        <p className="text-5xl font-extrabold poppins text-center">
          What Our <span className="text-green">Travellers</span> Say
        </p>
      </div>
      <div className="w-full flex justify-between gap-10">
        <div className="w-[40%]">
          <div className="group relative sm:h-[350px] h-[250px] rounded-2xl overflow-hidden flex flex-col justify-end w-full">
            {" "}
            {/* Background Image */}{" "}
            <Image
              src="/reviews.jpg"
              alt="whyUs"
              fill
              className=" object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
            />{" "}
            {/* Dark Overlay */}{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-500" />
            {/* Content */}{" "}
            <div className="relative z-10 p-4 text-white flex flex-col gap-2">
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
              </div>{" "}
              <p className="text-2xl font-semibold max-w-sm">
                5.0 rated by thousands of travellers
              </p>{" "}
              <p className="text-sm leading-6">
                {" "}
                Over 6,200 verified reviews across Trustpilot and Google
              </p>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="w-[55%] flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border-l-2 border-[#70deec] pl-4"
            >
              <p className="text-lg">{item.review}</p>
              <div className="flex items-center gap-2">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={item.img}
                  alt=""
                />
                <div>
                  <p className="text-base">{item.name}</p>
                  <p className="text-sm">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
