import React from "react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#002453] to-[#2b476c] px-6 md:px-16 pb-0 xl:px-40 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-20 border-b-2 border-blue-300 pb-10">
        <div className="flex flex-col ">
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Address
          </h1>
          <p className="text-gray-200 mt-8">
            Alam Bhaban House # 51 1st floor,Rd No 17, Banani C/A, Dhaka 1213
          </p>
          <p className="text-gray-200 mt-2 ">(+880) 1779999938</p>
          <p className="text-gray-200 mt-2">support@takeoffbd.com</p>
        </div>
        <div>
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Help
          </h1>
          <p className="text-gray-200 mt-8">FAQ</p>
          <p className="text-gray-200 mt-2 ">Privacy Policy</p>
          <p className="text-gray-200 mt-2">Terms And Conditions</p>
          <p className="text-gray-200 mt-2">Refund & Cancellation</p>
        </div>
        <div>
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Quick Links
          </h1>
          <p className="text-gray-200 mt-8">About Us</p>
          <p className="text-gray-200 mt-2 ">Contact Us</p>
          <p className="text-gray-200 mt-2">Bank Details</p>
        </div>
        <div className=" ">
          <h1
            className="relative inline-block text-xl font-bold text-white mb-4 
  after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-2"
          >
            Payment Method
          </h1>
          <div className="img-box grid grid-cols-4  mt-8 gap-2">
            <img src="visaCard.svg.png" alt="Description" />
            <img src="Item.png" alt="Description" />
            <img src="am.png" alt="Description" />
            <img src="bkash.svg.png" alt="Description" />
            <img src="Item (1).png" alt="Description" />
            <img src="Item (2).png" alt="Description" />
            <img src="Item (3).png" alt="Description" />
            <img src="Item (4).png" alt="Description" />
            <img src="Item (5).png" alt="Description" />
            <img src="Item (6).png" alt="Description" />
          </div>
        </div>
      </div>
      <div className="mt-0 flex flex-col-reverse  xl:flex-row justify-between items-center ">
        <p className="text-gray-200 mb-10 text-center mt-10">
          © 2023 TakeOff. All rights reserved.
        </p>

        <div className="md:flex md:gap-1">
          <button className="hover:shadow-lg hover:shadow-indigo-800/100 transition  flex gap-2 p-3 bg-gray-800 justify-center items-center w-50 text-white  mb-2 md:rounded-l-lg  ">
            <h1>Verified by</h1>
            <img src="varify.png" alt="Description" className="" />
          </button>

          <button className=" hover:shadow-lg hover:shadow-indigo-800/100 transition flex gap-2 p-3 bg-gray-800 justify-center items-center w-50 text-white  mb-2 md:rounded-r-lg  ">
            <h1>Authorized by</h1>
            <img src="iata.png" alt="Description" className="" />
          </button>
        </div>
        <div className="flex gap-2 mt-5 mb-5">
          <img src="twiter.png" alt="twiter" />
          <img src="youtube.png" alt="youtube" />
          <img src="facebook.png" alt="facebook" />
          <img src="in.png" alt="linkedin" />
        </div>
      </div>
    </div>
  );
}
