"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Cta from "@/components/layout/Cta";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Packages from "@/sections/Packages";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Packages />
      {/* <Cta /> */}
      <Footer />
    </>
  );
}

export default page;
