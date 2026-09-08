"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import Drawer from "../ui/Drawer";
import { usePathname } from "next/navigation";
import { RiMenuUnfoldLine, RiShareCircleLine } from "react-icons/ri";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { Search, ShoppingBag, UserRoundArrowLeft } from "lucide-react";
import { FaBlenderPhone } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Navbar() {
  const pathname = usePathname();
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const navLinks = [
    { name: "About Us", link: "/" },
    { name: "Our Locations", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <>
      {/* desktop-nav */}
      <nav className="hidden md:block fixed top-0 left-0 z-50 w-full">
        <div className="w-full hidden lg:flex items-center justify-between gap-4 lg:px-12 px-5 bg-[#eaf8fa] py-2 text-black">
          <p className="flex items-center gap-3 text-sm">
            <FcGoogle size={20} />
            Rated 5.0 on Google
          </p>
          <div className="flex items-center gap-10">
            <p className="flex items-center gap-3 text-sm">
              <RiShareCircleLine size={20} className="text-green" />
              250k+ Journeys
            </p>
            <p className="flex items-center gap-3 text-sm">
              <BsFillTicketPerforatedFill size={20} className="text-green" />
              Zero hidden fees
            </p>
            <p className="flex items-center gap-3 text-sm">
              <FaBus size={20} className="text-green" />
              Terminal transfer included
            </p>
          </div>
          <p className="flex items-center gap-3">
            <FaBlenderPhone size={20} className="text-green" />
            <div>
              <p className="text-xs text-gray-500">Give us a call</p>
              <p className="text-base font-extrabold">0324 4748625</p>
            </div>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 lg:px-12 px-5 py-5 bg-white backdrop-blur-3xl text-black">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="VUSELO"
              width={180}
              height={80}
              priority
              className="h-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center lg:gap-10 gap-5">
            {navLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-base text-black transition-colors hover:text-green"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="">
            <Button title="Book Parking" variant="light" padding="py-2 px-4" />
          </div>
        </div>
      </nav>
      {/* mobile-nav */}
      <nav className="block md:hidden fixed top-0 left-0 z-50 w-full">
        <div className="flex items-center justify-between gap-4 lg:px-16 px-5 py-6 bg-white backdrop-blur-3xl">
          {/* Icons */}
          <div className="flex items-center gap-3 text-black">
            <button
              onClick={() => setMenuDrawerOpen(true)}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <RiMenuUnfoldLine size={21} />
            </button>
            <button className="cursor-pointer transition-opacity hover:opacity-70">
              <Search size={21} />
            </button>
          </div>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="VUSELO"
              width={120}
              height={60}
              priority
              className="h-auto"
            />
          </Link>
          {/* Icons */}
          <div className="flex items-center gap-3 text-black">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative cursor-pointer transition-opacity hover:opacity-70"
            >
              <ShoppingBag size={21} />

              {/* Notification Dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-froozen border-2 border-black" />
            </button>

            <a
              href="/login"
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <UserRoundArrowLeft size={21} />
            </a>
          </div>
        </div>
      </nav>

      {/* mobile-menu-drawer */}
      <Drawer
        open={menuDrawerOpen}
        onClose={() => setMenuDrawerOpen(false)}
        side="left"
      >
        <div className="h-full flex flex-col bg-black text-white">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold space-grotesk">Menu</h2>

            <button
              onClick={() => setMenuDrawerOpen(false)}
              className="text-white text-2xl cursor-pointer hover:opacity-70"
            >
              ×
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-col p-6">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setMenuDrawerOpen(false)}
                className="py-4 text-lg border-b border-white/10 transition-opacity hover:opacity-60"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
