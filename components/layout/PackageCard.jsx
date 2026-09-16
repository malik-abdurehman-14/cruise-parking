import React from "react";

function PackageCard({ img, title, desc, price, selected }) {
  return (
    <div
      className={`relative w-full flex rounded-2xl h-[300px] bg-white overflow-hidden border-2 transition-all duration-300 ${
        selected ? "border-green" : "border-transparent"
      }`}
    >
      {/* Selected Badge */}
      {selected && (
        <div className="absolute top-0 right-0 bg-green text-white text-sm font-semibold px-5 py-2 rounded-bl-2xl z-10">
          Selected
        </div>
      )}

      <div className="w-[50%]">
        <img
          className="rounded-l-2xl w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 px-7 py-6 justify-center w-[50%]">
        <p className="text-2xl font-bold poppins">{title}</p>

        <p>{desc}</p>

        <div className="flex items-center justify-between w-full">
          <p className="text-sm items-end">
            <span className="text-green text-2xl font-extrabold">{price}</span>{" "}
            /day
          </p>

          <p className="text-sm">Port shuttle transfer included in rate</p>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
