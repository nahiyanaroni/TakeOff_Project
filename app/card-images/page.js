import React from "react";

export default function CardImages() {
  return (
    <div className="px-6 md:px-16 lg:px-40 py-16 bg-[#f4faff]">
      {/* Exclusive Offer */}
      <h1 className="text-black text-3xl md:text-4xl mb-6 font-bold">
        Exclusive Offer
      </h1>
      <div className="flex overflow-x-auto gap-6 mb-16 h-[220px]">
        <img
          src="/image 241 (1).png"
          width={1000}
          height={212}
          alt="Offer 1"
          className="rounded-2xl object-cover"
        />
        <img
          src="/image 242.png"
          alt="Offer 2"
          width={1000}
          height={212}
          className="rounded-2xl object-cover"
        />
        <img
          src="/image 162.png"
          alt="Offer 3"
          width={1000}
          height={212}
          className="rounded-2xl object-cover"
        />

        {/* <img
          src="/image 162.png"
          alt="Offer 3"
          width={444}
          height={212}
          className="rounded-2xl object-cover"
        /> */}
      </div>
      {/* Our Promotions */}

      <div className=" mb-2 md:flex md:justify-between items-center">
        <h1 className="text-black text-3xl md:text-4xl mb-10 font-bold mt-20">
          Our Promotions
        </h1>
        {/* Tabs */}
        <div className="bg-white text-black rounded-2xl mt-10 ">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li className="hover:cursor-pointer rounded-xl hover:bg-yellow-500">
              <a>All</a>
            </li>
            <li className="hover:cursor-pointer rounded-xl hover:bg-yellow-500">
              <a>Flight</a>
            </li>
            <li className="hover:cursor-pointer rounded-xl hover:bg-yellow-500">
              <a>Hotel</a>
            </li>
            <li className="hover:cursor-pointer rounded-xl hover:bg-yellow-500">
              <a>Holidays</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Promo Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="md:flex gap-6 bg-white p-4 rounded-2xl shadow-lg">
          <img
            src="/Mask group.png"
            alt="Promo 1"
            className="rounded-2xl w-full md:w-[180px] h-auto object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-black mt-4 md:mt-0 mb-4 text-lg">
              Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic
              Air Tickets
            </p>
            <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-lg px-4 py-2 w-fit">
              Explore Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:flex gap-6 bg-white p-4 rounded-2xl shadow-lg">
          <img
            src="/Mask group (1).png"
            alt="Promo 2"
            className="rounded-2xl w-full md:w-[180px] h-auto object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-black mt-4 md:mt-0 mb-4 text-lg">
              Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic
              Air Tickets
            </p>
            <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-lg px-4 py-2 w-fit">
              Explore Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:flex gap-6 bg-white p-4 rounded-2xl shadow-lg">
          <img
            src="/Mask group (2).png"
            alt="Promo 3"
            className="rounded-2xl w-full md:w-[180px] h-auto object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-black mt-4 md:mt-0 mb-4 text-lg">
              Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic
              Air Tickets
            </p>
            <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-lg px-4 py-2 w-fit">
              Explore Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:flex gap-6 bg-white p-4 rounded-2xl shadow-lg">
          <img
            src="/Mask group (3).png"
            alt="Promo 4"
            className="rounded-2xl w-full md:w-[180px] h-auto object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-black mt-4 md:mt-0 mb-4 text-lg">
              Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic
              Air Tickets
            </p>
            <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-lg px-4 py-2 w-fit">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      {/* Find great fares */}
      <div>
        <h1 className="text-black mt-20 font-bold text-4xl">
          Find great fares
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  {/* img-1 */}
  <div className="relative">
    <img
      src="Group 1000006306.png"
      width={1000}
      height={595}
      alt="Image 1"
      className="rounded-2xl w-full h-[250px] md:h-full object-cover"
    />
    <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
      <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
        <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
          18 Packages
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <p className="text-sm md:text-base">Starts From</p>
        <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
      </div>
    </div>
  </div>

  {/* column 2 */}
  <div className="grid grid-cols-1 gap-8">
    {/* img-2 */}
    <div className="relative">
      <img
        src="image 37 (3).png"
        width={700}
        alt="Image 2"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>

    {/* img-3 */}
    <div className="relative">
      <img
        src="image 37.png"
        width={700}
        alt="Image 37"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>
  </div>

  {/* column 3 */}
  <div className="grid grid-cols-1 gap-8">
    {/* img-4 */}
    <div className="relative">
      <img
        src="image 37 (1).png"
        width={700}
        alt="Image 4"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>

    {/* img-5 */}
    <div className="relative">
      <img
        src="image 37 (2).png"
        width={700}
        alt="Image 5"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
