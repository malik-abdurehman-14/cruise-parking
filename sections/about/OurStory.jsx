"use client";

import React from "react";

function OurStory() {
  return (
    <section className="w-full lg:px-12 px-6 sm:py-14 py-8 flex lg:flex-row flex-col lg:gap-10 gap-7 bg-gray-100">
      <div className="flex flex-col gap-3 lg:w-[50%] w-full">
        <p className="text-sm text-green uppercase">Our Story</p>
        <p className="md:text-5xl text-3xl font-extrabold poppins max-w-xl mb-2">
          It Started With a Simple{" "}
          <span className="text-green">Frustration.</span>
        </p>
        <p className="sm:text-base text-sm">
          Back in 2015, our family took a cruise from Southampton. While we were
          excited for the trip, the journey began with stress — navigating
          disorganized, overpriced port parking and dealing with cold, automated
          machines instead of real people.
        </p>
        <p className="sm:text-base text-sm">
          We realized cruise travelers deserved a better experience: a personal
          handoff, a secure and fully gated site that isn't miles away, and a
          fair price. We started with just a 20-space lot and a single dream.
        </p>
        <p className="sm:text-base text-sm">
          Today, we have grown into Southampton’s highest-rated independent
          cruise parking operator, but our values remain exactly the same. We
          operate on honesty, security, and true hospitality.
        </p>
      </div>
      <div className="lg:w-[50%] w-full">
        <img
          className="rounded-xl lg:h-full h-[300px] lg:w-auto w-full object-cover"
          src="/trust.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default OurStory;
