import PackageCard from "@/components/layout/PackageCard";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React from "react";

function Packages() {
  const cards = [
    {
      img: "/whyUs2.jpg",
      title: "Cruise Car Parking & Drop-Off Service",
      desc: "Experience effortless cruise departures and returns in Southampton with our Cruise Car Parking & Drop-Off Service. Choose the duration of your car's stay and enjoy the convenience of Cruise Parking Southampton, the city's top-rated cruise parking providers.",
      price: "£29.00",
      selected: "true",
    },
    {
      img: "/location3.png",
      title: "Cruise Car Parking & Drop-Off Service",
      desc: "Experience effortless cruise departures and returns in Southampton with our Cruise Car Parking & Drop-Off Service. Choose the duration of your car's stay and enjoy the convenience of Cruise Parking Southampton, the city's top-rated cruise parking providers.",
      price: "£49.00",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-9 bg-gray-50 pb-16 px-12">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-5xl font-extrabold poppins">
          Choose Your <span className="text-green"> Parking Package</span>
        </h1>
        <p className="text-base">
          Select your parking service and any optional extras for your cruise
          from Southampton Port.
        </p>
      </div>
      {/* summary-card */}
      <div className="bg-[#F8FEFF] rounded-2xl border border-gray-400 flex flex-col gap-9 px-7 py-6 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-green text-lg">Your Booking Summary</p>
          <div>
            <Button
              title="Proceed Payment"
              variant="light"
              padding="px-8 py-1"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-sm text-green uppercase">
                Departing Cruise Info
              </p>
              <p className="text-sm font-bold">Collection Date: 08/09/2026</p>
              <p className="text-sm text-gray-700">Ship: Queen Mary 2</p>
            </div>
            <div>
              <p className="text-sm text-green uppercase">
                Returning Cruise Info
              </p>
              <p className="text-sm font-bold">Collection Date: 09/09/2026</p>
              <p className="text-sm text-gray-700">Ship: Queen Mary 2</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-sm">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-sm text-gray-700">
                Cruise car parking & drop-off service
              </p>
              <p className="text-sm font-bold">£29.00</p>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <p className="text-sm text-gray-700">EV Charging Extra</p>
              <p className="text-sm font-bold">£59.99</p>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <p className="text-sm text-gray-700">Booking Period</p>
              <p className="text-sm font-bold">1 Day</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs uppercase">Total Price</p>
            <p className="text-3xl font-extrabold">£88.99</p>
          </div>
        </div>
      </div>
      {/* packagees */}
      <h2 className="text-2xl font-extrabold poppins">Available Services</h2>
      <div className="flex flex-col gap-8 w-full">
        {cards.map((item, index) => (
          <PackageCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            selected={item.selected}
          />
        ))}
      </div>
      {/* Licenses */}
      <div className="w-full bg-white rounded-2xl px-7 py-5">
        <p className="text-xl font-bold">Enter Licenses</p>
        <p className="text-sm font-bold my-2">
          Enter Licenses Number to fetch data
        </p>
        <div className="flex items-center gap-3">
          <Input placeholder="LD25 ABC" variant="light" className="py-2" />
          <Button
            title="Fetch Data"
            variant="light"
            padding="py-2 px-5"
            className="rounded-full"
          />
        </div>
      </div>
      {/* Vehicle Details */}
      <div className="w-full bg-white rounded-2xl px-7 py-5">
        <p className="text-xl font-bold">Vehicle Details</p>
        <p className="text-sm my-2 max-w-3xl">
          Enter the registration number of the vehicle(s) you're parking with us
          below. Our system will match your registration plate to a car
          automatically.
        </p>
        <div className="grid grid-cols-2 w-full gap-5 mt-4">
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-1">
              Car Registeration
            </label>
            <Input placeholder="LD25 ABC" variant="light" className="py-2" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-1">
              Car Make
            </label>
            <Input placeholder="Ford" variant="light" className="py-2" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-1">
              Car Model
            </label>
            <Input placeholder="Focus" variant="light" className="py-2" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-1">
              Car Color
            </label>
            <Input placeholder="Blue" variant="light" className="py-2" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-1">
              Car Color
            </label>
            <Input placeholder="Blue" variant="light" className="py-2" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-1">
              No. of Passenger
            </label>
            <Input placeholder="01" variant="light" className="py-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
