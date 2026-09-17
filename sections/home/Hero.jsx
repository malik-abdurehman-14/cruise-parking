"use client";

import FeatureBar from "@/components/layout/FeatureBar";
import "../../app/globals.css";
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
    <>
      <section className="hidden sm:block w-full bg-gray-100 py-12 sm:pt-24 lg:pt-40 lg:px-12 sm:px-6 min-h-screen">
        <div className="relative w-full">
          {/* HERO IMAGE */}
          <div
            className="
      relative
      w-full
      min-h-[900px]
      sm:min-h-[850px]
      md:min-h-[780px]
      lg:h-[600px]
      lg:min-h-0

      overflow-hidden
      rounded-[24px]
      sm:rounded-[28px]
      lg:rounded-[32px]

      bg-cover
      bg-center
      py-8 px-8 lg:px-0 lg:py-0
    "
            style={{
              backgroundImage: "url('/hero.png')",
            }}
          >
            {/* Image overlay */}
            <div className="absolute inset-0 bg-[#006b78]/35" />

            {/* ================================================= */}
            {/* HERO CONTENT */}
            {/* ================================================= */}

            <div className="relative z-10 flex h-full items-end justify-center lg:justify-start">
              <div
                className="
          w-full
          max-w-[680px]

          px-5
          pb-[430px]

          sm:px-8
          sm:pb-[410px]

          md:pb-[380px]

          lg:px-6
          lg:pb-10
          lg:max-w-[680px]

          text-center
          lg:text-left
        "
              >
                {/* Badge */}
                <div
                  className="
            relative
            mb-4
            inline-flex
            items-center
            overflow-hidden
            rounded-full
            border
            border-white/50
            bg-white/10
            px-3
            py-1
            text-xs
            sm:text-[15px]
            font-semibold
            text-white
            backdrop-blur-md
          "
                >
                  <div className="water-effect" />

                  <span className="relative z-10">
                    Southampton Port Parking
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="hidden sm:block
            mx-auto
            max-w-[650px]

            poppins
            text-[38px]
            sm:text-[48px]
            md:text-[52px]
            lg:text-[50px]
            xl:text-[62px]

            font-extrabold
            leading-[1]
            sm:leading-[0.98]

            tracking-[-1px]
            sm:tracking-[-1.5px]

            text-white
          "
                >
                  Leave The Parking
                  <br />
                  Stress <span className="italic font-bold">behind.</span>
                </h1>

                {/* Description */}
                <p
                  className="hidden sm:block
            mx-auto
            mt-4
            max-w-[570px]

            text-[14px]
            sm:text-[16px]
            md:text-[17px]

            font-semibold
            leading-[1.55]

            text-white
          "
                >
                  Secure your car, step onto the shuttle, and start your trip
                  feeling ahead of the day. Pre-booked parking for the UK’s
                  busiest airports and cruise ports.
                </p>

                {/* Trusted users */}
                <div
                  className="hidden sm:block
            mt-6
            sm:mt-7

            flex
            items-center
            justify-center
            lg:justify-start

            gap-3
          "
                >
                  {/* Users */}
                  <div className="flex shrink-0 -space-x-2">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#e8b69a]">
                      <span className="text-base sm:text-lg">👨🏻</span>
                    </div>

                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#d9c2a3]">
                      <span className="text-base sm:text-lg">👨🏼</span>
                    </div>

                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#7d6851]">
                      <span className="text-base sm:text-lg">👨🏽</span>
                    </div>
                  </div>

                  <p
                    className="
              max-w-[420px]

              text-xs
              sm:text-[14px]
              md:text-[15px]

              font-bold
              leading-snug
              text-white

              text-left
            "
                  >
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
        lg:bottom-0
        bottom-8
        left-1/2
        z-20

        w-full
        max-w-full

        -translate-x-1/2

        lg:bg-gray-100
        bg-transparent

        rounded-t-[24px]

        shadow-[-8px_-8px_30px_rgba(0,0,0,0.08)]

        lg:left-auto
        lg:right-0
        lg:translate-x-0

        lg:w-[600px]
        lg:max-w-[50%]
         sm:px-8
         px-6
        lg:rounded-tl-[24px]
        lg:rounded-tr-[0px]
        lg:rounded-bl-[0px]
        lg:rounded-br-[20px]

        lg:pl-6
        lg:pt-6
        lg:pr-0
        lg:pb-0
      "
            >
              {/* FORM */}
              <div
                className="
          w-full

          rounded-[18px]
          sm:rounded-[20px]

          border
          border-[#d7ecf1]

          bg-white

          p-4
          sm:p-5

          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        "
              >
                {/* Header */}
                <h2
                  className="hidden sm:block
            mb-4
            text-base
            sm:text-lg
            font-bold
            text-[#152b43]
          "
                >
                  Check Availability
                </h2>

                <h1
                  className="sm:hidden block mb-4
            mx-auto
            max-w-[650px]

            poppins
            text-[30px]

            font-extrabold
            leading-[1]
            sm:leading-[0.98]

            tracking-[-1px]
            sm:tracking-[-1.5px]

            text-black
          "
                >
                  Leave The Parking
                  <br />
                  Stress <span className="italic font-bold">behind.</span>
                </h1>

                <div className="mb-5 h-px w-full bg-[#cbcfd0]" />

                {/* ================================================= */}
                {/* FIELDS */}
                {/* ================================================= */}

                <div
                  className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-x-4
            gap-y-4
          "
                >
                  {/* Cruise Ship */}
                  <div>
                    <label className="mb-1 block text-xs sm:text-sm font-bold text-[#152b43]">
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
                    <label className="mb-1 block text-xs sm:text-sm font-bold text-[#152b43]">
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
                    <label className="mb-1 block text-xs sm:text-sm font-bold text-[#152b43]">
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
                    <label className="mb-1 block text-xs sm:text-sm font-bold text-[#152b43]">
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

                {/* ================================================= */}
                {/* SAME SHIP */}
                {/* ================================================= */}

                <label className="my-5 flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked
                  />

                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[3px] bg-[#197c87]">
                    <Check size={12} strokeWidth={4} className="text-white" />
                  </span>

                  <span className="text-xs sm:text-sm font-bold text-[#152b43]">
                    Same ship for return
                  </span>
                </label>

                {/* ================================================= */}
                {/* BUTTON */}
                {/* ================================================= */}

                <Button
                  link="/booking"
                  title="Check Availability"
                  variant="light"
                  padding="py-2 px-4"
                  width="w-full"
                  className="rounded-full"
                />

                {/* Bottom text */}
                <p className="mt-3 text-center text-xs sm:text-sm font-medium text-red-500">
                  See availability before paying
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Bar */}
        <div className="hidden lg:block">
          <FeatureBar />
        </div>
      </section>

      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <section className="block w-full bg-gray-100 py-12 sm:hidden">
        <div className="relative w-full">
          {/* ================================================= */}
          {/* HERO IMAGE */}
          {/* ================================================= */}

          <div
            className="
        relative
        h-[240px]
        w-full
        overflow-hidden

        rounded-t-[24px]
        rounded-b-[60px]

        bg-cover
        bg-center
      "
            style={{
              backgroundImage: "url('/hero.png')",
            }}
          >
            {/* Image overlay */}
            <div className="absolute inset-0 bg-[#006b78]/35" />

            {/* ================================================= */}
            {/* MOBILE HERO CONTENT - BADGE ONLY */}
            {/* ================================================= */}

            <div className="relative z-10 flex h-full items-center justify-center px-4">
              <div
                className="
            relative
            inline-flex
            items-center
            overflow-hidden

            rounded-full
            border
            border-white/50

            bg-white/10
            px-4
            py-1.5

            text-xs
            font-semibold
            text-white

            backdrop-blur-md
          "
              >
                <div className="water-effect" />

                <span className="relative z-10">Southampton Port Parking</span>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* FORM - OUTSIDE IMAGE */}
          {/* ================================================= */}

          <div
            className="
    relative
    z-20

    -mt-[80px]

    w-full
    px-5
  "
          >
            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <div
              className="
      relative
      w-full
      overflow-hidden

      rounded-[20px]

      border
      border-white/40

      bg-white/20

      p-4

      shadow-[0_8px_30px_rgba(0,0,0,0.08)]

      backdrop-blur-xl
      backdrop-saturate-150
    "
            >
              {/* ================================================= */}
              {/* FORM CONTENT */}
              {/* ================================================= */}

              <div className="relative z-10">
                {/* Heading */}

                <h1
                  className="
          mb-4
          block

          mx-auto
          max-w-[650px]

          poppins
          text-[30px]

          font-extrabold
          leading-[1]

          tracking-[-1px]

          text-white
        "
                >
                  Leave The Parking
                  <br />
                  Stress <span className="italic font-bold">behind.</span>
                </h1>

                {/* Divider */}

                <div className="mb-5 h-px w-full bg-black/15" />

                {/* ================================================= */}
                {/* FIELDS */}
                {/* ================================================= */}

                <div
                  className="
          grid
          grid-cols-1
          gap-x-4
          gap-y-4
        "
                >
                  {/* Cruise Ship */}

                  <div>
                    <label className="mb-1 block text-xs font-bold text-[#152b43]">
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
                border-white/60

                bg-white/70

                px-3
                pr-8

                text-sm
                text-black

                outline-none

                backdrop-blur-md

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
                    <label className="mb-1 block text-xs font-bold text-[#152b43]">
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
                border-white/60

                bg-white/70

                px-3

                text-sm
                text-black

                outline-none

                backdrop-blur-md

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
                    <label className="mb-1 block text-xs font-bold text-[#152b43]">
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
                border-white/60

                bg-white/70

                px-3
                pr-8

                text-sm
                text-black

                outline-none

                backdrop-blur-md

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
                    <label className="mb-1 block text-xs font-bold text-[#152b43]">
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
                border-white/60

                bg-white/70

                px-3

                text-sm
                text-black

                outline-none

                backdrop-blur-md

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

                {/* ================================================= */}
                {/* SAME SHIP */}
                {/* ================================================= */}

                <label className="my-5 flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked
                  />

                  <span
                    className="
            flex
            h-[20px]
            w-[20px]
            shrink-0
            items-center
            justify-center

            rounded-[3px]

            bg-[#197c87]
          "
                  >
                    <Check size={12} strokeWidth={4} className="text-white" />
                  </span>

                  <span className="text-xs font-bold text-[#152b43]">
                    Same ship for return
                  </span>
                </label>

                {/* ================================================= */}
                {/* BUTTON */}
                {/* ================================================= */}

                <Button
                  link="/booking"
                  title="Check Availability"
                  variant="light"
                  padding="py-2 px-4"
                  width="w-full"
                  className="rounded-full"
                />

                {/* Bottom text */}

                <p className="mt-3 text-center text-xs font-medium text-red-500">
                  See availability before paying
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
