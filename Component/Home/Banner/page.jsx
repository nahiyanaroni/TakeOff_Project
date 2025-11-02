
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuUserRoundPlus } from "react-icons/lu";
import { RxEnter } from "react-icons/rx";

export default function Banner() {
  return (
    <div className="relative">
      <figure>
        <Image
          src="/bg.png"
          height={800}
          width={1400}
          className="w-full object-cover  h-[900px] md:h-[950px] xl:h-[800px]"
          alt="Background"
        />
      </figure>

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full">
      
       

        {/* Banner Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-10   justify-center items-center px-6 md:px-16   xl:px-40 py-16 gap-10">
          {/* Left text content */}
          <div className="w-full ">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              Enjoy Holiday By Traveling
            </h1>
            <p className="text-base md:text-xl text-white mb-10">
              Fine Hotel And Ticket With best experience. Intrinsically
              architect supercore competencies vis-a-vis interactive
              partnerships.
            </p>
             <div className="flex flex-col md:flex-row gap-4">
      {/* Login Button */}
      <Link href="/login">
        <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-xl px-12 py-8 flex items-center gap-2">
          <RxEnter /> Login
        </button>
      </Link>

      {/* Register Button */}
      <Link href="/register">
        <button className="btn bg-gradient-to-r from-[#004CAE] to-[#0320DA] border-none rounded-sm text-xl px-12 py-8 text-white flex items-center gap-2">
          <LuUserRoundPlus /> Register
        </button>
      </Link>
    </div>
          </div>

          {/* Right image & promo */}
          <div className="w-full  bg-black/20 backdrop-blur-sm p-6 md:p-12 rounded-3xl flex flex-col items-center">
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
