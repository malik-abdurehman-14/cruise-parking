"use client";

import Cta from "@/components/layout/Cta";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ReuseableHero from "@/components/layout/ReuseableHero";

function page() {
  return (
    <>
      <Navbar />
      <ReuseableHero
        img="/location-hero.png"
        heading="Wherever You're Sailing or Flying From, We've Got You Covered."
        text="Find your nearest secure parking location and book in seconds."
      />
      <section className="w-full flex flex-col gap-9 bg-gray-100 py-16 px-12"></section>
      {/* <Cta />
      <Footer /> */}
    </>
  );
}

export default page;
