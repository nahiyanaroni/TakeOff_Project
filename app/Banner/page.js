import React from "react";
import { FaChevronUp } from "react-icons/fa6";
import { LuUserRoundPlus } from "react-icons/lu";
import { RxEnter } from "react-icons/rx";

export default function Banner() {
  return (
    <div className="relative">
      <img
        src="/bg.png"
        className="w-full object-cover h-[900px] md:h-[500px] lg:h-[700px]"
        alt="Background"
      />

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Navbar */}
        <div className="navbar border-b border-gray-400 px-6 md:px-16 lg:px-40">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[999]"
              >
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Quick Link</a>
                </li>
              </ul>
            </div>
            <img src="Group.png" alt="Logo" className="h-10" />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Quick Link</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <a className="btn bg-white border-none rounded-lg text-black">
              <img src="flag.png" alt="flag" className="w-5 h-5 mr-2" /> English{" "}
              <FaChevronUp />
            </a>
          </div>
        </div>

        {/* Banner Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center px-6 md:px-16   lg:px-40 py-16 gap-10">
          {/* Left text content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Enjoy Holiday By Traveling
            </h1>
            <p className="text-base md:text-lg text-white mb-10">
              Fine Hotel And Ticket With best experience. Intrinsically
              architect supercore competencies vis-a-vis interactive
              partnerships.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-lg px-12 py-8 flex items-center gap-2">
                <RxEnter /> Login
              </button>
              <button className="btn bg-gradient-to-r from-[#004CAE] to-[#0320DA] border-none rounded-sm text-lg px-12 py-8 text-white flex items-center gap-2">
                <LuUserRoundPlus /> Register
              </button>
            </div>
          </div>

          {/* Right image & promo */}
          <div className="w-full lg:w-1/2 bg-black/20 backdrop-blur-sm p-6 md:p-12 rounded-3xl flex flex-col items-center">
            <img src="fly.png" alt="Fly" className="w-full max-w-xs mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 bg-black/50 px-6 py-3 rounded-2xl text-center">
              14% discount
            </h1>
            <h2 className="text-white text-xl md:text-2xl text-center mt-4">
              On international route
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
