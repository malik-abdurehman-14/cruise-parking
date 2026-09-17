"use client";

import { CiLock } from "react-icons/ci";
import { PiUsers } from "react-icons/pi";
import { LuShieldAlert } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";

function TrustSection() {
  const data = [
    {
      title: "Gated Entry",
      text: "Barrier-controlled access only",
      icon: <CiLock size={24} />,
    },
    {
      title: "Fully Insured",
      text: "All vehicles covered",
      icon: <AiFillSafetyCertificate size={24} />,
    },
    {
      title: "Staffed Site",
      text: "Team on site every day",
      icon: <PiUsers size={24} />,
    },
    {
      title: "Alarmed Compound",
      text: "Intruder detection & alert systems",
      icon: <LuShieldAlert size={24} />,
    },
    {
      title: "CCTV 24/7",
      text: "Continuous camera surveillance",
      icon: <BsCameraVideo size={24} />,
    },
  ];

  return (
    <section className="w-full lg:px-12 px-6 py-14 flex md:flex-row flex-col md:gap-10 gap-7 bg-[#F8FEFF]">
      <div className="flex flex-col gap-4 md:w-[50%] w-full">
        <p className="text-sm text-green uppercase">Your car is safe with us</p>
        <p className="md:text-6xl text-3xl font-extrabold poppins max-w-xl">
          Family-Run, Here Every{" "}
          <span className="text-green">Step Of The Way</span>
        </p>
        <p className="text-base">
          We're a family-run business and we treat every car as if it were our
          own. Our secure compound was purpose-built with cruise travellers in
          mind — so you can enjoy every moment at sea without a second thought
          about your vehicle.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 space-x-4 space-y-5 mt-2">
          {data.map((item, index) => (
            <div className="flex items-center gap-2">
              <p className="text-green">{item.icon}</p>
              <div>
                <p className="font-bold poppins">{item.title}</p>
                <p className="text-sm text-gray-900">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full">
        <img
          className="rounded-xl h-full object-cover"
          src="/trust.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default TrustSection;
