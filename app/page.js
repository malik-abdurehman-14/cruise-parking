"use client";

import Navbar from "@/components/layout/Navbar";
import Brands from "@/sections/home/Brands";
import Cta from "@/components/layout/Cta";
import Departure from "@/sections/home/Departure";
import { Faqs } from "@/components/layout/Faqs";
import Hero from "@/sections/home/Hero";
import Process from "@/sections/home/Process";
import Reviews from "@/components/layout/Reviews";
import TrustSection from "@/sections/home/TrustSection";
import WhyUs from "@/sections/home/WhyUs";
import Footer from "@/components/layout/Footer";

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
      <Footer />
    </>
  );
}
