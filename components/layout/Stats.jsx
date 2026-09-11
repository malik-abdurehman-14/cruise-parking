import React from "react";

function Stats() {
  return (
    <div className="bg-[#D3F1F5] py-10 px-16 grid grid-cols-4 gap-5">
      <div className="flex flex-col items-center gap-1">
        <p className="text-4xl text-green font-extrabold poppins">10+ Years</p>
        <p className="text-base font-bold">Operating in Southampton</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-4xl text-green font-extrabold poppins">250,000+</p>
        <p className="text-base font-bold">Cars Safely Parked</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-4xl font-extrabold poppins">4.9★</p>
        <p className="text-base font-bold">Average Customer Rating</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-4xl text-green font-extrabold poppins">87%</p>
        <p className="text-base font-bold">Repeat Customers</p>
      </div>
    </div>
  );
}

export default Stats;
