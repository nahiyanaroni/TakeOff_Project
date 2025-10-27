import React from "react";
export default function AdvantageCard({ imgSrc, title, description }) {
  return (
    <div className="group hover:bg-yellow-500  bg-white rounded-xl shadow-md p-6 cursor-pointer">
      <img src={imgSrc} alt={title} className="w-16 h-16 object-contain" />
      <h1 className="text-2xl text-black group-hover:text-white font-bold mt-4 transition-colors duration-300">
        {title}
      </h1>
      <p className="text-gray-600 mt-2 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}
