"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar px-6 md:px-12 xl:px-40 border-b transition-all duration-300 z-50 ${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-white shadow-md border-gray-300"
          : "absolute top-0 left-0 w-full bg-transparent border-gray-400"
      }`}
    >
      {/* ✅ Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li>
              <Link href="/" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Logo */}
       <Link href="/" ><img src="Group.png" alt="Logo" className="h-12 w-auto" /></Link>
      </div>

      {/* ✅ Navbar Center — only visible on large screens */}
      <div className="navbar-start  hidden lg:flex">
        <ul
          className={`menu menu-horizontal text-lg font-semibold px-1 gap-8 ${
            isScrolled ? "text-black" : pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`hover:text-yellow-600 ${
                pathname === "/" ? "text-yellow-600" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-yellow-600 ${
                pathname === "/about" ? "text-yellow-600" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-yellow-600 ${
                pathname === "/contact" ? "text-yellow-600" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* ✅ Navbar End — always visible (button) */}
      <div className="navbar-end">
        <button className="btn bg-white border-none rounded-xl text-black flex items-center gap-2 shadow-sm">
          <img src="flag.png" alt="flag" className="w-5 h-5" />
          English
          <FaChevronUp className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
