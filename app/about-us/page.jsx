"use client";

import Navbar from "@/components/layout/Navbar";
import ReuseableHero from "@/components/layout/ReuseableHero";
import OurStory from "@/sections/about/OurStory";
import OurTeam from "@/sections/about/OurTeam";

function page() {
  return (
    <>
      <Navbar />
      <ReuseableHero />
      <OurStory />
      <OurTeam />
    </>
  );
}

export default page;
