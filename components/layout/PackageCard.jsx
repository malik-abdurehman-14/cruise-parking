import React from "react";

function PackageCard({ img, title, desc, price, selected }) {
  return (
    <div
      className={`relative w-full flex md:flex-row flex-col rounded-2xl lg:h-[300px] h-auto bg-white overflow-hidden border-2 transition-all duration-300 ${
        selected ? "border-green" : "border-transparent"
      }`}
    >
      {/* Selected Badge */}
      {selected && (
        <div className="absolute top-0 right-0 bg-green text-white text-sm font-semibold px-5 py-2 rounded-bl-2xl z-10">
          Selected
        </div>
      )}

      <div className="md:w-[50%] w-full">
        <img
          className="md:rounded-l-2xl rounded-t-2xl w-full md:h-full h-[220px] object-cover"
          src={img}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 px-7 py-6 justify-center md:w-[50%] w-full">
        <p className="sm:text-2xl text-xl font-bold poppins">{title}</p>

        <p className="sm:text-base text-sm">{desc}</p>

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
