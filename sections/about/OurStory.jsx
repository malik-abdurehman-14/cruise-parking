"use client";

import React from "react";

function OurStory() {
  return (
    <section className="w-full px-12 py-14 flex gap-10 bg-gray-100">
      <div className="flex flex-col gap-3 w-[50%]">
        <p className="text-sm text-green uppercase">Our Story</p>
        <p className="text-5xl font-extrabold poppins max-w-xl mb-2">
          It Started With a Simple{" "}
          <span className="text-green">Frustration.</span>
        </p>
        <p className="text-base">
          Back in 2015, our family took a cruise from Southampton. While we were
          excited for the trip, the journey began with stress — navigating
          disorganized, overpriced port parking and dealing with cold, automated
          machines instead of real people.
        </p>
        <p className="text-base">
          We realized cruise travelers deserved a better experience: a personal
          handoff, a secure and fully gated site that isn't miles away, and a
          fair price. We started with just a 20-space lot and a single dream.
        </p>
        <p className="text-base">
          Today, we have grown into Southampton’s highest-rated independent
          cruise parking operator, but our values remain exactly the same. We
          operate on honesty, security, and true hospitality.
        </p>
      </div>
      <div className="w-[50%]">
        <img
          className="rounded-xl h-full object-cover"
          src="/trust.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default OurStory;
