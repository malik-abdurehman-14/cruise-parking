import React from "react";

function Brands() {
  const brands = [
    "/b1.png",
    "/b2.png",
    "/b3.png",
    "/b4.png",
    "/b5.png",
    "/b6.png",
    "/b7.png",
    "/b8.png",
  ];
  return (
    <section className="w-full flex flex-col gap-10 bg-gray-100 py-14 px-12">
      <p className="text-xl poppins font-extrabold uppercase text-center">
        Proudly serving all top cruise passengers
      </p>
      <div className="w-full flex gap-5 justify-between items-center">
        {brands.map((item, index) => (
          <div className="bg-white p-6 rounded-xl w-full flex justify-center">
            <img className="w-auto h-[40px]" key={index} src={item} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
