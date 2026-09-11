"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Are there any fees I will see later?",
    answer:
      "No. Your quote includes parking, the terminal transfer, and VAT. What you see at checkout is the total you pay.",
  },
  {
    id: 2,
    question: "What happens when I arrive at the parking site?",
    answer:
      "The best parking option depends on your needs. For convenience, On-Site parking is closest to the terminals. For budget-conscious travellers, Park & Ride offers great value. Meet & Greet is perfect for a stress-free experience with no hassles.",
  },
  {
    id: 3,
    question: "Can I cancel or change my booking?",
    answer:
      "Short-stay car parks at Heathrow typically allow stays of up to 24 hours. For longer stays, we recommend our long-stay parking options which offer better rates and are designed for extended airport parking.",
  },
  {
    id: 4,
    question: "How secure is my car while I am away?",
    answer:
      "Absolutely! Our long-stay parking options are perfect for 2-week trips. You can park your car safely and securely at one of our partner facilities. We offer competitive rates for extended stays, often cheaper than airport parking.",
  },
  {
    id: 5,
    question: "What if my flight or ship is delayed?",
    answer:
      "Parking costs vary depending on the service type and length of stay. Park & Ride starts from £44 per week, while On-Site parking may vary. Use our comparison tool to see current rates and find the best deal for your booking.",
  },
  {
    id: 6,
    question: "Are shuttle transfers included?",
    answer:
      "Yes, most bookings can be amended at least 24 hours before your scheduled date. You can change your parking dates, upgrade your service, or make other modifications. Contact our support team for assistance with amendments.",
  },
];

export function Faqs() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full flex flex-col gap-10 py-16 px-12 items-center bg-gray-100">
      {/* Header */}
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <p className="text-sm text-green uppercase">NEED TO KNOW</p>
        <p className="text-5xl font-extrabold poppins text-center max-w-xl">
          Questions Answered <span className="text-green"> Before You Go.</span>
        </p>
        <p className="text-center text-base">
          Still curious? Our travel-day team is one call away on{" "}
          <span className="font-bold">0800 123 9880.</span>
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-3 max-w-6xl">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-gray-100 border-b border-gray-700 rounded-lg px-6 transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex justify-between items-center py-5 gap-5 text-left"
              >
                <span className="sm:text-lg text-md font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="text-2xl text-gray-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
