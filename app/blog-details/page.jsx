"use client";

import Cta from "@/components/layout/Cta";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ReuseableHero from "@/components/layout/ReuseableHero";
import BlogDetails from "@/sections/BlogDetails";

function page() {
  return (
    <>
      <Navbar />
      <BlogDetails />
      <Cta />
      <Footer />
    </>
  );
}

export default page;
