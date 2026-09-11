import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagramSquare, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const socialLinks = [
    { link: "#", icon: <FaFacebookF size={20} /> },
    { link: "#", icon: <FaInstagramSquare size={20} /> },
    { link: "#", icon: <FaYoutube size={20} /> },
    { link: "#", icon: <FaTwitter size={20} /> },
  ];
  return (
    <div className="bg-[#001215] lg:px-16 px-5 py-8 flex justify-between w-full gap-10 text-white h-[45vh]">
      <div className="flex flex-col gap-5 justify-between h-full w-[25%]">
        <img className="w-[200px] h-fit" src="/footer-logo.png" alt="" />
        <div className="flex items-center gap-3 h-fit">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="p-3 rounded-full border border-green text-green"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-between h-full w-[75%]">
        <div className="flex gap-10 justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-green font-bold text-2xl poppins">Explore</p>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              Our Locations
            </Link>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              Blogs
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-green font-bold text-2xl poppins">Help</p>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-green font-bold text-2xl poppins">Contact Us</p>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              +1 (999) 999-99-99
            </Link>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              hello@logoipsum.com
            </Link>
            <Link
              href="/"
              className="text-base hover:text-green hover:underline"
            >
              London
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-green font-mono text-xs uppercase">
              Subscription
            </p>
            <div className="flex items-center border border-gray-500 rounded-lg w-[400px] overflow-hidden mt-1">
              <input
                type="email"
                placeholder="E-MAIL"
                className="flex-1 bg-transparent py-2 px-3 text-white outline-none placeholder:text-white text-sm"
              />

              {/* Arrow */}
              <button
                type="button"
                className="flex items-center justify-center px-3 border-l border-gray-500 cursor-pointer text-froozen transition-colors duration-300"
              >
                <IoIosArrowForward size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full">
          <p className="text-green font-mono text-xs">© 2026 — Copyright</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
