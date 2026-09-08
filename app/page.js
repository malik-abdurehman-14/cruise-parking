"use client";

import Navbar from "@/components/layout/Navbar";
import Brands from "@/sections/Brands";
import Hero from "@/sections/Hero";
import Process from "@/sections/Process";
import TrustSection from "@/sections/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <TrustSection />
      <Brands />
    </>
  );
}
