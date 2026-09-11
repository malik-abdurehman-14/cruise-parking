"use client";

import Cta from "@/components/layout/Cta";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ReuseableHero from "@/components/layout/ReuseableHero";
import Reviews from "@/components/layout/Reviews";
import Stats from "@/components/layout/Stats";
import OurStory from "@/sections/about/OurStory";
import OurTeam from "@/sections/about/OurTeam";
import PeaceOfMind from "@/sections/about/PeaceOfMind";
import WhatDrivesUs from "@/sections/about/WhatDrivesUs";

function page() {
  return (
    <>
      <Navbar />
      <ReuseableHero
        img="/about-hero.png"
        heading=" We Look After Your Car Like It's Our Own"
        text="Family-run since 2015 · Southampton's most trusted cruise parking
              service. Start your holiday knowing everything is safe."
      />
      <OurStory />
      <OurTeam />
      <WhatDrivesUs />
      <Stats />
      <PeaceOfMind />
      <Reviews />
      <Cta />
      <Footer />
    </>
  );
}

export default page;
