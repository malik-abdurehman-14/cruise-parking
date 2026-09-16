"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Input from "@/components/ui/Input";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <section className="w-full flex flex-col gap-9 bg-gray-50 pb-16 px-12">
        <div className="bg-white rounded-xl px-7 py-3 text-base">
          Returning Customer?{" "}
          <a href="#" className="text-blue-600">
            Click to login
          </a>
        </div>
        {/* forms */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-7 w-[50%]">
            <div className="bg-white rounded-xl px-7 py-3 flex flex-col gap-3 w-full">
              <p className="text-2xl font-bold underline">
                Billing Information
              </p>
              <div className="w-full">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="your full name"
                  variant="default"
                  className="py-2"
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  placeholder="enter email address"
                  variant="default"
                  className="py-2"
                />
              </div>
              <div className="flex gap-6">
                <div className="w-full">
                  <label htmlFor="" className="text-sm font-semibold mb-2">
                    Country / Region
                  </label>
                  <Input
                    placeholder="country"
                    variant="default"
                    className="py-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-sm font-semibold mb-2">
                    Phone No.
                  </label>
                  <Input
                    placeholder="+63 917 123 4567"
                    variant="default"
                    className="py-2"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Address Line 1
                </label>
                <Input
                  placeholder="123 Malakas Street, Diliman"
                  variant="default"
                  className="py-2"
                />
              </div>
              <div className="flex gap-6">
                <div className="w-full">
                  <label htmlFor="" className="text-sm font-semibold mb-2">
                    City
                  </label>
                  <Input
                    placeholder="city"
                    variant="default"
                    className="py-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-sm font-semibold mb-2">
                    Province / State
                  </label>
                  <Input
                    placeholder="Metro Manila"
                    variant="default"
                    className="py-2"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Zip / Postal Code
                </label>
                <Input placeholder="1100" variant="default" className="py-2" />
              </div>
            </div>
            {/* Payment Form */}
            <div className="bg-white rounded-xl px-7 py-5 flex flex-col gap-5 w-full">
              <p className="text-2xl font-bold underline">Payment Method</p>

              {/* Payment Options */}
              <div className="flex items-center gap-8">
                {/* Card Payment */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    defaultChecked
                    className="w-4 h-4 accent-green cursor-pointer"
                  />
                  <span className="text-sm font-semibold">Card Payment</span>
                </label>

                {/* PayPal */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    className="w-4 h-4 accent-green cursor-pointer"
                  />
                  <span className="text-sm font-semibold">PayPal</span>
                </label>
              </div>

              {/* Card Details */}
              <div className="flex flex-col gap-4">
                {/* Card Number */}
                <div className="w-full">
                  <label className="text-sm font-semibold block mb-2">
                    Card Number
                  </label>

                  <Input
                    placeholder="1234 5678 9012 3456"
                    variant="default"
                    className="py-2"
                  />
                </div>

                {/* Card Holder */}
                <div className="w-full">
                  <label className="text-sm font-semibold block mb-2">
                    Cardholder Name
                  </label>

                  <Input
                    placeholder="John Doe"
                    variant="default"
                    className="py-2"
                  />
                </div>

                {/* Expiry + CVV */}
                <div className="flex gap-6">
                  <div className="w-full">
                    <label className="text-sm font-semibold block mb-2">
                      Expiry Date
                    </label>

                    <Input
                      placeholder="MM / YY"
                      variant="default"
                      className="py-2"
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-sm font-semibold block mb-2">
                      CVV
                    </label>

                    <Input
                      placeholder="123"
                      variant="default"
                      className="py-2"
                    />
                  </div>
                </div>
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
