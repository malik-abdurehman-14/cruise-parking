"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Input from "@/components/ui/Input";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { TiTick } from "react-icons/ti";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <section className="w-full flex flex-col gap-14 bg-gray-50 pb-16 pt-5 px-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-16 w-16 flex items-center justify-center text-green bg-[#D3F1F5] rounded-full">
            <TiTick size={32} />
          </div>
          <h1 className="text-3xl font-extrabold poppins">
            Booking Confirmed!
          </h1>
          <p className="text-sm font-mono max-w-xl text-center">
            Thank you for choosing Cruise Parking Southampton. Your reservation
            is completely verified and all set.
          </p>
          <div className="px-5 py-1 text-xs text-green bg-[#D3F1F5] rounded-full">
            CONFIRMATION #CPS-2026-08547
          </div>
          <p className="text-sm font-mono text-center">
            A confirmation email has been sent to john.smith@email.com
          </p>
        </div>
        {/* forms */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-7 w-[50%]">
            <div className="bg-white rounded-xl px-7 py-3 flex flex-col gap-3 w-full">
              <p className="text-2xl font-bold underline mb-3">
                Contact Details
              </p>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Full Name</p>
                <p className="text-sm font-semibold">Abdurehman</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Email Address</p>
                <p className="text-sm font-semibold">
                  abdurehmanzafar14@gmail.com
                </p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Phone Number</p>
                <p className="text-sm font-semibold">+44 7700 900456</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Country / Region</p>
                <p className="text-sm font-semibold">United Kingdom</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Address Line 1</p>
                <p className="text-sm font-semibold">10 High Street</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2">
                <p className="text-sm font-semibold">City / State</p>
                <p className="text-sm font-semibold">Southampton, Hampshire</p>
              </div>
            </div>
            <div className="bg-white rounded-xl px-7 py-3 flex flex-col gap-3 w-full">
              <p className="text-2xl font-bold underline mb-3">
                Vehicle Details
              </p>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Car Registration</p>
                <p className="text-sm font-semibold">LD25 ABC</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Car Make</p>
                <p className="text-sm font-semibold">Ford</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Car Colour</p>
                <p className="text-sm font-semibold">Blue</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">Car Model</p>
                <p className="text-sm font-semibold">Focus</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2 border-b border-gray-300 pb-1">
                <p className="text-sm font-semibold">No. of Passengers</p>
                <p className="text-sm font-semibold">01</p>
              </div>
              <div className="w-full flex items-center justify-between mb-2">
                <p className="text-sm font-semibold">Bags / Luggage</p>
                <p className="text-sm font-semibold">01</p>
              </div>
            </div>
          </div>
          {/* booking-summary */}
          <div className="bg-[#F8FEFF] rounded-2xl border border-gray-400 flex flex-col gap-6 px-7 py-6 w-[50%] h-fit">
            <div className="flex items-center justify-between w-full">
              <p className="text-green text-base">Your Booking Summary</p>
              <p className="text-green text-xs font-bold">View Invoice</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="border-b border-gray-300 pb-3">
                  <p className="text-xs text-green uppercase">
                    Departing Cruise Info
                  </p>
                  <p className="text-sm font-bold">
                    Collection Date: 08/09/2026 (Queen Mary 2)
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-3">
                  <p className="text-xs text-green uppercase">
                    Departing Cruise Info
                  </p>
                  <p className="text-sm font-bold">
                    Collection Date: 08/09/2026 (Queen Mary 2)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 border-b border-gray-500 pb-3">
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-sm text-gray-700">
                    Cruise car parking & drop-off service
                  </p>
                  <p className="text-sm font-bold">£29.00</p>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-sm text-gray-700">EV Charging Extra</p>
                  <p className="text-sm font-bold">£59.99</p>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-sm text-gray-700">Booking Period</p>
                  <p className="text-sm font-bold">1 Day</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs uppercase">Total Price</p>
                <p className="text-2xl font-extrabold">£88.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
