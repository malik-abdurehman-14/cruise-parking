import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import BlogsCard from "@/components/layout/BlogsCard";

function BlogDetails() {
  const cards = [
    {
      img: "/blog1.png",
      title: "5 Things to Know Before You Park at Southampton Port",
      desc: "Avoid surprises on the day — from arrival times to luggage handling, ensure a seamless start.",
      category: "Parking Tips",
      time: "4 min",
      writter: "Kevin Hall",
      writterImg: "/team1.jpg",
    },
    {
      img: "/blog2.png",
      title: "The Ultimate Cruise Packing Checklist",
      desc: "Don't forget the essentials — our team compiled this comprehensive list from years of traveler feedback.",
      category: "Packing Advice",
      time: "6 min",
      writter: "Sarah Jenkins",
      writterImg: "/team2.jpg",
    },
    {
      img: "/blog3.png",
      title: "New Shuttle Route Cuts Transfer Time to 5 Minutes",
      desc: "We've launched a direct shuttle that gets you from car to cruise terminal faster than ever.",
      category: "Travel News",
      time: "3 min",
      writter: "James Carter",
      writterImg: "/team3.jpg",
    },
  ];
  return (
    <>
      {/* hero */}
      <section className="w-full bg-gray-100 ppy-12 lg:pt-40 pt-12 lg:px-12 px-0">
        <div className="w-full">
          <div className="group relative md:h-[60vh] h-[50vh] md:rounded-2xl overflow-hidden flex flex-col justify-center items-center w-full">
            {/* Background Image */}
            <Image
              src="/blogHero.png"
              alt="blogDetails"
              fill
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-green/70 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-10 text-white flex flex-col items-center justify-center gap-1">
              <p className="md:text-4xl text-3xl text-center font-extrabold poppins max-w-3xl md:leading-14">
                Your Complete Guide to Southampton Cruise Terminal
              </p>
              <div className="flex items-center sm:gap-5 gap-3 text-sm">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/team2.jpg"
                  alt=""
                />
                <p className="text-sm font-semibold sm:-ml-3">Emma Clark</p>
                <p>28 Aug 2026</p>
                <p>8 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* details */}
      <section className="w-full bg-gray-100 py-12 lg:px-12 px-6 flex flex-col sm:gap-6 gap-5">
        <p className="text-base">
          If you're cruising from Southampton for the first time, the logistics
          can feel overwhelming. Where do you park? How early should you arrive?
          What's the terminal actually like? We've been helping cruisers
          navigate this exact process for over a decade, and this comprehensive
          guide covers everything you need to know.
        </p>
        <h2 className="text-xl font-extrabold poppins">
          Getting to the Terminal
        </h2>
        <p className="text-base">
          Located on the south coast of England, Southampton is easily
          accessible via the UK's major road networks. Most travellers will
          arrive via the M3 or M27 motorway routes. Signage leading into the
          Southampton port complex is extremely clear, directing passengers to
          specific berths depending on their allocated cruise lines. Be sure to
          check your boarding pass to verify whether your ship is departing from
          Mayflower, City, Horizon, or Ocean terminal.
        </p>
        <div className="border-l-4 border-green h-full pl-6">
          <p className="text-xs text-green">
            "The whole process took less than 10 minutes — parked, on the
            shuttle, at the terminal. Easier than any airport experience I've
            had in the last decade."
          </p>
          <p className="text-sm">— David M., repeat customer</p>
        </div>
        <h2 className="text-xl font-extrabold poppins">Where to Park</h2>
        <p className="text-base">
          We highly recommend securing your parking spot well in advance of
          departure day. Safe, gated, and secure port parking sites with 24/7
          CCTV security ensure you can enjoy your cruise without worrying about
          your vehicle. Opt for a package that explicitly includes rapid shuttle
          services straight to the dock side.
        </p>
        <img
          className="w-full h-[350px] rounded-2xl object-cover"
          src="/blogDetails.png"
          alt=""
        />
        <h2 className="text-xl font-extrabold poppins">Check-In & Boarding</h2>
        <p className="text-base">
          Ensure you arrive during your designated arrival window to prevent
          queue bottlenecks. Porters will be ready on terminal arrival to tag
          and transport your large luggage straight to your stateroom. Maintain
          all essential papers, passports, and cabin tickets close in your hand
          luggage so boarding is as swift as possible.
        </p>
        <div className="rounded-2xl sm:px-7 px-5 sm:py-5 py-4 flex md:flex-row flex-col md:items-center gap-4 justify-between w-full border bg-[#D3F1F5] border-green">
          <div>
            <p className="text-lg font-extrabold poppins">
              Ready to Book Your Cruise Parking?
            </p>
            <p className="text-sm max-w-sm">
              Secure, affordable parking with a rapid free shuttle — just 5
              minutes from Southampton terminal.
            </p>
          </div>
          <div>
            <Button
              title="Check Availability"
              variant="light"
              padding="px-5 py-1"
            />
          </div>
        </div>
        <div className="rounded-2xl sm:px-7 px-5 sm:py-5 py-4 w-full flex md:flex-row flex-col items-center gap-4 border bg-white border-[#D3F1F5]">
          <img
            className="rounded-full h-16 w-16 object-cover"
            src="/team3.jpg"
            alt=""
          />
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-bold">Emma Clarke</p>
            <p className="text-sm font-serif text-green">
              Founder, Cruise Parking Southampton
            </p>
            <p className="text-sm text-center md:text-start">
              Emma started Cruise Parking in 2015 from a 20-space lot near the
              port. She still personally oversees every location to ensure
              families receive top-tier, reliable service.
            </p>
          </div>
        </div>
      </section>
      {/* lates-articles */}
      <div className="w-full bg-gray-100 sm:py-16 py-10 lg:px-12 px-6 flex flex-col gap-12">
        <h4 className="text-3xl font-extrabold poppins">You Might Also Like</h4>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-7 gap-5 w-full">
          {cards.map((item, index) => (
            <BlogsCard
              img={item.img}
              category={item.category}
              time={item.time}
              title={item.title}
              desc={item.desc}
              writterImg={item.writterImg}
              writter={item.writter}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
