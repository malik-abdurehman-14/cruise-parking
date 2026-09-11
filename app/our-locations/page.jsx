"use client";

import Cta from "@/components/layout/Cta";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ReuseableHero from "@/components/layout/ReuseableHero";

function page() {
  const cards = [
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
    {
      img: "/locations.png",
      title: "Southampton Port — Cruise Parking",
      desc: "Immediate proximity to the primary southern shipping channels.",
      time: "5 min",
      price: "£49",
    },
  ];
  return (
    <>
      <Navbar />
      <ReuseableHero
        img="/location-hero.png"
        heading="Wherever You're Sailing or Flying From, We've Got You Covered."
        text="Find your nearest secure parking location and book in seconds."
      />
      <section className="w-full flex flex-col gap-9 bg-gray-100 py-16 px-12">
        <div className="flex flex-col gap-3 w-full">
          <p className="text-sm text-green uppercase">OUR LOCATIONS</p>
          <p className="text-5xl font-extrabold poppins">
            Choose Your <span className="text-green"> Departure Point</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-full border-[0.5px] border-[#D3F1F5] rounded-2xl bg-white p-5"
            >
              <img
                className="rounded-xl h-[230px] object-cover w-full"
                src={item.img}
                alt={item.title}
              />
              <div className="flex flex-col gap-1 mt-4">
                <p className="text-xl font-bold poppins">{item.title}</p>
                <p className="text-base">{item.desc}</p>
                <p className="text-sm font-bold text-green">
                  {item.time} shuttle to terminal
                </p>
                <div className="mt-3">
                  <p className="text-sm text-gray-600 -mb-1">Weekly Rate</p>
                  <p className="text-xl font-extrabold poppins">
                    From {item.price}/ week
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
}

export default page;
