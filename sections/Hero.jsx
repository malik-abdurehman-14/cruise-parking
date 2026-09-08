"use client";

import { Button } from "@/components/ui/Button";
import {
  CalendarDays,
  ChevronDown,
  ShieldCheck,
  Video,
  Bus,
  BadgeCheck,
  Check,
} from "lucide-react";

function Hero() {
  return (
    <section className="w-full bg-gray-50 py-12 pt-44 px-12 min-h-screen">
      <div className="relative w-full">
        {/* HERO IMAGE */}
        <div
          className="
        relative
        h-[650px]
        w-full
        overflow-hidden
        rounded-[32px]
        bg-cover
        bg-center
      "
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
          {/* Image overlay */}
          <div className="absolute inset-0 bg-[#006b78]/35" />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

          {/* HERO CONTENT */}
          <div className="relative z-10 flex h-full items-end">
            <div className="w-full max-w-[680px] px-8 pb-10 lg:px-6">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center rounded-full border border-white/50 bg-white/10 px-3 py-1 text-[15px] font-semibold text-white backdrop-blur-sm">
                Southampton Port Parking
              </div>

              {/* Heading */}
              <h1 className="max-w-[650px] text-[48px] poppins font-extrabold leading-[0.98] tracking-[-1.5px] text-white sm:text-[58px] lg:text-[62px]">
                Leave The Parking
                <br />
                Stress <span className="italic font-bold">behind.</span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-[570px] text-[16px] font-semibold leading-[1.55] text-white md:text-[17px]">
                Secure your car, step onto the shuttle, and start your trip
                feeling ahead of the day. Pre-booked parking for the UK’s
                busiest airports and cruise ports.
              </p>

              {/* Trusted users */}
              <div className="mt-7 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#e8b69a]">
                    <span className="text-lg">👨🏻</span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#d9c2a3]">
                    <span className="text-lg">👨🏼</span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#7d6851]">
                    <span className="text-lg">👨🏽</span>
                  </div>
                </div>

                <p className="text-[14px] font-bold text-white md:text-[15px]">
                  Join 1000’s who have trusted Southampton Cruise Parking
                  already
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* FLOATING AVAILABILITY FORM */}
          {/* ================================================= */}

          <div
            className="
          absolute
          bottom-0
          right-0
          z-20
          w-[600px]
          max-w-[50%]
          bg-gray-50
          pl-6
          pt-6

          rounded-tl-[38px]
          rounded-tr-[0px]
          rounded-bl-[0px]
          rounded-br-[22px]

          shadow-[-8px_-8px_30px_rgba(0,0,0,0.08)]
        "
          >
            {/* FORM */}
            <div
              className="
            rounded-[20px]
            border
            border-[#d7ecf1]
            bg-white
            p-5
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          "
            >
              {/* Header */}
              <h2 className="mb-4 text-lg font-bold text-[#152b43]">
                Check Availability
              </h2>

              <div className="mb-5 h-px w-full bg-[#cbcfd0]" />

              {/* Fields */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {/* Cruise Ship */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152b43]">
                    Cruise Ship
                  </label>

                  <div className="relative">
                    <select
                      className="
                    h-[40px]
                    w-full
                    appearance-none
                    rounded-[5px]
                    border
                    border-[#c4c8ca]
                    bg-white
                    px-3
                    pr-8
                    text-sm
                    text-black
                    outline-none
                    focus:border-[#167c87]
                  "
                    >
                      <option>Ship Name</option>
                      <option>Queen Elizabeth</option>
                      <option>Queen Mary 2</option>
                      <option>MSC Virtuosa</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="
                    pointer-events-none
                    absolute
                    right-2.5
                    top-1/2
                    -translate-y-1/2
                    text-[#172936]
                  "
                    />
                  </div>
                </div>

                {/* Departure Date */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152b43]">
                    Departure Date
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      className="
                    h-[40px]
                    w-full
                    rounded-[5px]
                    border
                   border-[#c4c8ca]
                    bg-white
                    px-3
                    text-sm
                    text-black
                    outline-none
                    focus:border-[#167c87]
                  "
                    />

                    <CalendarDays
                      size={18}
                      className="
                    pointer-events-none
                    absolute
                    right-2.5
                    top-1/2
                    -translate-y-1/2
                    text-[#172936]
                  "
                    />
                  </div>
                </div>

                {/* Return Cruise Ship */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152b43]">
                    Return Cruise Ship
                  </label>

                  <div className="relative">
                    <select
                      className="
                    h-[40px]
                    w-full
                    appearance-none
                    rounded-[5px]
                    border
                    border-[#c4c8ca]
                    bg-white
                    px-3
                    pr-8
                    text-sm
                    text-black
                    outline-none
                    focus:border-[#167c87]
                  "
                    >
                      <option>Ship Name</option>
                      <option>Queen Elizabeth</option>
                      <option>Queen Mary 2</option>
                      <option>MSC Virtuosa</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="
                    pointer-events-none
                    absolute
                    right-2.5
                    top-1/2
                    -translate-y-1/2
                    text-[#172936]
                  "
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152b43]">
                    Return Date
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      className="
                    h-[40px]
                    w-full
                    rounded-[5px]
                    border
                   border-[#c4c8ca]
                    bg-white
                    px-3
                    text-sm
                    text-black
                    outline-none
                    focus:border-[#167c87]
                  "
                    />

                    <CalendarDays
                      size={18}
                      className="
                    pointer-events-none
                    absolute
                    right-2.5
                    top-1/2
                    -translate-y-1/2
                    text-[#172936]
                  "
                    />
                  </div>
                </div>
              </div>

              {/* Same ship */}
              <label className="my-5 flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  defaultChecked
                />

                <span className="flex h-[20px] w-[20px] items-center justify-center rounded-[3px] bg-[#197c87]">
                  <Check size={12} strokeWidth={4} className="text-white" />
                </span>

                <span className="text-sm font-bold text-[#152b43]">
                  Same ship for return
                </span>
              </label>

              {/* Button */}
              <Button
                title="Check Availability"
                variant="light"
                padding="py-2 px-4"
                width="w-full"
                className="rounded-full"
              />

              {/* Bottom text */}
              <p className="mt-3 text-center text-sm font-medium text-red-500">
                See availability before paying
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="mx-auto mt-10 border-t border-[#edf0f1] pt-3">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Feature
            icon={<ShieldCheck size={24} />}
            title="Locked & Gated"
            description="Fully enclosed perimeters"
          />

          <Feature
            icon={<Video size={24} />}
            title="24/7 CCTV Active"
            description="Continuous video monitoring"
          />

          <Feature
            icon={<Bus size={24} />}
            title="Free Rapid Transfer"
            description="Only 2-min shuttle to port"
          />

          <Feature
            icon={<BadgeCheck size={24} />}
            title="Port Approved"
            description="Official & trusted facility"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-center gap-3 border-r border-[#e5eaec] px-2 last:border-none md:px-4">
      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#d8f4f8] text-[#147b87]">
        {icon}
      </div>

      <div>
        <h3 className="text-base poppins font-bold leading-tight text-[#14283b]">
          {title}
        </h3>

        <p className="mt-0.5 text-sm text-gray-800">{description}</p>
      </div>
    </div>
  );
}
