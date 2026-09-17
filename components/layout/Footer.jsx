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
    <div className="bg-[#001215] lg:px-16 px-6 py-8 flex flex-col justify-between w-full gap-10 text-white lg:h-[45vh] h-auto">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-7 justify-between">
        <img className="w-[200px] h-fit" src="/footer-logo.png" alt="" />
        <div className="flex flex-col gap-2">
          <p className="text-green font-bold text-2xl poppins">Explore</p>
          <Link href="/" className="text-base hover:text-green hover:underline">
            About Us
          </Link>
          <Link href="/" className="text-base hover:text-green hover:underline">
            Our Locations
          </Link>
          <Link href="/" className="text-base hover:text-green hover:underline">
            Blogs
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-green font-bold text-2xl poppins">Help</p>
          <Link href="/" className="text-base hover:text-green hover:underline">
            Contact Us
          </Link>
          <Link href="/" className="text-base hover:text-green hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-base hover:text-green hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-green font-bold text-2xl poppins">Contact Us</p>
          <Link href="/" className="text-base hover:text-green hover:underline">
            +1 (999) 999-99-99
          </Link>
          <Link href="/" className="text-base hover:text-green hover:underline">
            hello@logoipsum.com
          </Link>
          <Link href="/" className="text-base hover:text-green hover:underline">
            London
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-green font-mono text-xs uppercase">Subscription</p>
          <div className="flex items-center border border-gray-500 rounded-lg w-full overflow-hidden mt-1">
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
      <div className="flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-5 w-full">
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
        <div>
          <p className="text-green font-mono text-xs">© 2026 — Copyright</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
