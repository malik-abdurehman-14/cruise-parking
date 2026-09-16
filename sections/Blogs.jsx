import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React from "react";

function Blogs() {
  const tabs = [
    { name: "All", active: true },
    { name: "Parking Tips", active: false },
    { name: "Port Guides", active: false },
    { name: "Packing Advice", active: false },
    { name: "Travel News", active: false },
  ];

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
    {
      img: "/blog4.png",
      title: "What to Expect at Southampton Mayflower Terminal",
      desc: "A first-timer's guide to navigating the terminal, check-in process, and nearby passenger amenities.",
      category: "Port Guides",
      time: "7 min",
      writter: "Emma Clarke",
      writterImg: "/team4.jpg",
    },
    {
      img: "/blog5.png",
      title: "EV Charging While You Cruise — How It Works",
      desc: "Return from your wonderful holiday to a fully charged car. Here's a breakdown of our EV service.",
      category: "Parking Tips",
      time: "5 min",
      writter: "Kevin Hall",
      writterImg: "/team1.jpg",
    },
    {
      img: "/blog6.png",
      title: "What to Wear on Your First Day at Sea",
      desc: "From comfortable embarkation outfits to your dinner dress code — pack smart for day one.",
      category: "Packing Advice",
      time: "4 min",
      writter: "Sarah Jenkins",
      writterImg: "/team2.jpg",
    },
  ];

  return (
    <>
      {/* tabs */}
      <div className="w-full bg-gray-100 py-16 px-12">
        <div className="flex items-center justify-between w-full gap-8">
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`text-sm rounded-full px-5 py-1 cursor-pointer transition-colors duration-200 ${
                  tab.active
                    ? "bg-green text-white"
                    : "text-green border border-green hover:bg-green hover:text-white"
                }`}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className="w-[20%]">
            <Input
              placeholder="search articles..."
              variant="light"
              className="py-2 w-full"
            />
          </div>
        </div>
      </div>
      {/* card-1 */}
      <div className="w-full bg-[#F8FEFF] py-12 px-12">
        <div className="bg-white rounded-2xl flex h-[400px]">
          <div className="w-[50%] h-full">
            <img
              className="rounded-l-2xl w-full h-full object-cover"
              src="/blogs.png"
              alt=""
            />
          </div>
          <div className="py-5 px-8 flex flex-col justify-center h-full gap-5 w-[50%]">
            <p className="flex items-center justify-between w-full">
              <div className="bg-[#b4e7f0] text-green px-3 py-1 text-sm rounded-full">
                Port Guides
              </div>
              <p className="text-sm">8 min read</p>
            </p>
            <h3 className="text-2xl font-extrabold poppins">
              Your Complete Guide to Southampton Cruise Terminal
            </h3>
            <p className="text-lg">
              Everything you need to know about parking, check-in, and getting
              to the ship seamlessly — directly from a team who does this every
              single day on the ground.
            </p>
            <p className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3 text-sm">
                <img
                  className="w-9 h-9 rounded-full object-cover"
                  src="/team2.jpg"
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold">Emma Clark</p>
                  <p>28 Aug 2026</p>
                </div>
              </div>
              <a href="#" className="text-base text-green">
                Read Article
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* lates-articles */}
      <div className="w-full bg-gray-100 py-16 px-12 flex flex-col gap-12">
        <h4 className="text-3xl font-extrabold poppins">Latest Articles</h4>
        <div className="grid grid-cols-3 gap-7 w-full">
          {cards.map((item, index) => (
            <div className="bg-white rounded-2xl flex flex-col w-full">
              <div className="h-[200px]">
                <img
                  className="rounded-t-2xl w-full h-full object-cover"
                  src={item.img}
                  alt={item.category}
                />
              </div>
              <div className="py-4 px-6 flex flex-col justify-center h-full gap-3">
                <p className="flex items-center justify-between w-full">
                  <div className="bg-[#b4e7f0] text-green px-3 py-1 text-sm rounded-full">
                    {item.category}
                  </div>
                  <p className="text-sm">{item.time} read</p>
                </p>
                <h3 className="text-xl font-extrabold poppins">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
                <p className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3 text-sm">
                    <img
                      className="w-9 h-9 rounded-full object-cover"
                      src={item.writterImg}
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.writter}</p>
                      <p>28 Aug 2026</p>
                    </div>
                  </div>
                  <a href="#" className="text-sm text-green">
                    Read Article
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* button */}
        <div className="w-full flex justify-center">
          <Button
            title="Load More Articles"
            variant="light"
            padding="py-2 px-5"
          />
        </div>
      </div>
    </>
  );
}

export default Blogs;
