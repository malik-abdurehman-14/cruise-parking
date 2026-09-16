import React from "react";
import Link from "next/link";

function BlogsCard({ img, category, time, title, desc, writterImg, writter }) {
  return (
    <div className="bg-white rounded-2xl flex flex-col w-full">
      <div className="h-[200px]">
        <img
          className="rounded-t-2xl w-full h-full object-cover"
          src={img}
          alt={category}
        />
      </div>
      <div className="py-4 px-6 flex flex-col justify-center h-full gap-3">
        <p className="flex items-center justify-between w-full">
          <div className="bg-[#b4e7f0] text-green px-3 py-1 text-sm rounded-full">
            {category}
          </div>
          <p className="text-sm">{time} read</p>
        </p>
        <h3 className="text-xl font-extrabold poppins">{title}</h3>
        <p className="text-sm">{desc}</p>
        <p className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 text-sm">
            <img
              className="w-9 h-9 rounded-full object-cover"
              src={writterImg}
              alt=""
            />
            <div>
              <p className="text-sm font-semibold">{writter}</p>
              <p>28 Aug 2026</p>
            </div>
          </div>
          <Link href="/blog-details" className="text-sm text-green">
            Read Article
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogsCard;
