import React from "react";
import {
  CalendarDays,
  ChevronDown,
  ShieldCheck,
  Video,
  Bus,
  BadgeCheck,
  Check,
} from "lucide-react";

function FeatureBar() {
  return (
    <div className="mx-auto mt-10 border-t border-b border-[#bdc1c2] py-3 bg-white">
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
  );
}

export default FeatureBar;

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-center gap-3 border-r border-[#bdc1c2] px-2 last:border-none md:px-4">
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
