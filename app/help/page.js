import React from "react";
import Support from "../Component/Support";

export default function HalpSupport() {
  const supportItems = [
    {
      imgSrc: "path/to/image1.png",
      title: "Support",
      description:
        "For any Trip ID related services, log on to www.takeoff travel.com/support Call ++880175 (24X7) or email at takeofftravel@.com",
    },
    {
      imgSrc: "",
      title: "Email itinerary",
      description: "Get your ticket and boarding pass directly on your email.",
    },
    {
      imgSrc: "path/to/image3.png",
      title: "Flight Status",
      description: "Get your ticket and boarding pass directly on your email.",
    },
  ];

  return (
    <div className="p-16 bg-gradient-to-r from-yellow-200 to-blue-300 ">
      <h1 className="text-2xl text-black mt-3">Quick Links</h1>
      <h1 className="text-4xl text-black mt-6">Need Some help?</h1>
      <div className="grid md:grid-cols-3 gap-6 w-full">
        {supportItems.map((item, index) => (
          <Support
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
