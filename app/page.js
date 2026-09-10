"use client";

import Navbar from "@/components/layout/Navbar";
import Brands from "@/sections/Brands";
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
    </>
  );
}
