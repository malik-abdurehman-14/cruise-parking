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
    <section className="w-full flex flex-col gap-10 bg-gray-100 py-14 lg:px-12 px-6">
      <p className="text-xl poppins font-extrabold uppercase text-center">
        Proudly serving all top cruise passengers
      </p>

      <div className="w-full flex lg:flex-nowrap flex-wrap sm:gap-5 gap-3 lg:justify-between justify-center items-center">
        {brands.map((item, index) => (
          <div
            key={index}
            className={`bg-white sm:p-6 p-4 rounded-xl lg:w-full sm:w-[150px] w-[100px] flex justify-center ${
              index >= 5 ? "hidden sm:flex" : "flex"
            }`}
          >
            <img className="w-auto h-[40px]" src={item} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
