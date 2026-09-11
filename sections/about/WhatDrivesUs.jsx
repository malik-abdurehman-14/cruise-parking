import React from "react";

function WhatDrivesUs() {
  const cards = [
    {
      img: "/reviews.jpg",
      title: "Honest Pricing",
      desc: "No hidden fees, no surge charges. The price you see is the price you pay.",
    },
    {
      img: "/drive1.png",
      title: "Genuine Care",
      desc: "We treat every car like it belongs to family. Inspection on arrival, ready on return.",
    },
    {
      img: "/drive2.png",
      title: "Local & Personal",
      desc: "We're not a faceless chain. You'll see the same friendly faces every single trip.",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-9 bg-gray-100 py-28 px-12">
      <div className="flex flex-col gap-3 items-center justify-center w-full">
        <p className="text-sm text-green uppercase">What drives us</p>
        <p className="text-5xl font-extrabold poppins">
          More Than Just <span className="text-green"> Parking.</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-full border-[0.5px] border-[#D3F1F5] rounded-2xl bg-white"
          >
            <img
              className="rounded-t-2xl h-[250px] object-cover w-full"
              src={item.img}
              alt={item.title}
            />
            <div className="p-4 flex flex-col">
              <p className="text-xl font-bold poppins">{item.title}</p>
              <p className="text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatDrivesUs;
