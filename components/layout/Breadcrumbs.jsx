"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
  const pathname = usePathname();

  const steps = [
    "Select Dates",
    "Choose Parking",
    "Your Details",
    "Confirmation",
  ];

  // Current page ke according active step
  const activeStep =
    pathname === "/booking"
      ? 2
      : pathname === "/checkout"
        ? 3
        : pathname === "/booking-confirmation"
          ? 4
          : 1;

  // Progress percentage
  const progress = ((activeStep - 1) / (steps.length - 0.8)) * 100;

  return (
    <div className="w-full bg-gray-50 py-16 pt-44 px-28">
      {/* Progress Line */}
      <div className="relative w-full h-1.5 sm:h-2 bg-gray-200 rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-green rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Steps */}
      <div className="flex items-start justify-between w-full mt-3 sm:mt-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= activeStep;

          return (
            <div
              key={step}
              className="flex items-center gap-1.5 sm:gap-2 min-w-0"
            >
              {/* Number */}
              <div
                className={cn(
                  "w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border border-black text-xs sm:text-sm font-medium transition-all duration-300 shrink-0",
                  isActive
                    ? "bg-green text-white border-green"
                    : "bg-white text-black",
                )}
              >
                {stepNumber}
              </div>

              {/* Step Name */}
              <span
                className={cn(
                  "text-[10px] leading-tight sm:text-sm text-center font-medium transition-colors duration-300 max-w-[70px] sm:max-w-none",
                  isActive ? "text-green" : "text-black",
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;
