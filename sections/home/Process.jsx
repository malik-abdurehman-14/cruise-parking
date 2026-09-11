"use client";

import { FaRegCompass } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Process() {
  const cards = [
    {
      id: "01",
      title: "Search & reserve",
      desc: "Pick your terminal, dates, and parking style. Your rate is locked in instantly.",
      img: "/p1.png",
      icon: <FaRegCompass size={24} />,
    },
    {
      id: "02",
      title: "Hand over simply",
      desc: "Follow clear directions to your secure site or meet your valet at departures.",
      img: "/p2.png",
      icon: <IoLocationOutline size={24} />,
    },
    {
      id: "03",
      title: "Travel lighter",
      desc: "Your car stays behind a barrier, under watch, while you enjoy the trip ahead.",
      img: "/p3.png",
      icon: <AiFillSafetyCertificate size={24} />,
    },
    {
      id: "04",
      title: "Return with ease",
      desc: "Your car or shuttle is ready when you land. No hunting, no waiting around.",
      img: "/p4.png",
      icon: <FiArrowDownRight size={24} />,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 bg-gray-100 py-14 px-12">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <p className="text-sm text-green">SIMPLE PROCESS</p>
        <p className="text-5xl font-extrabold poppins max-w-2xl text-center">
          Welcome to Cruise Parking in{" "}
          <span className="text-green">Southampton.</span>
        </p>
        <p className="max-w-sm text-center text-base">
          Four steps stand between you and the open sea. We handle everything
          else.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-7">
        {cards.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-lg flex flex-col gap-4 bg-white"
          >
            <img
              className="h-[200px] w-full rounded-lg"
              src={item.img}
              alt=""
            />
            <div className="flex items-center justify-between">
              <p className="font-extrabold">{item.id}</p>
              <p className="text-green">{item.icon}</p>
            </div>
            <p className="text-xl poppins font-bold">{item.title}</p>
            <p className="text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
