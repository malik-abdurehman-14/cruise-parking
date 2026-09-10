"use client";

import Navbar from "@/components/layout/Navbar";
import Brands from "@/sections/Brands";
import Cta from "@/sections/Cta";
import Departure from "@/sections/Departure";
import { Faqs } from "@/sections/Faqs";
import Hero from "@/sections/Hero";
import Process from "@/sections/Process";
import Reviews from "@/sections/Reviews";
import TrustSection from "@/sections/TrustSection";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <TrustSection />
      <Brands />
      <WhyUs />
      <Reviews />
      <Departure />
      <Faqs />
      <Cta />
    </>
  );
}
