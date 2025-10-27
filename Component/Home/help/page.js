import React from "react";
import Support from "../component/Support";

export default function HalpSupport() {
  const supportItems = [
    {
      imgSrc: "help.png",
      title: "Support",
      description:
        "For any Trip ID related services, log on to www.takeoff travel.com/support Call ++880175 (24X7) or email at takeofftravel@.com",
    },
    {
      imgSrc: "mail.png",
      title: "Email itinerary",
      description: "Get your ticket and boarding pass directly on your email.",
    },
    {
      imgSrc: "location.png",
      title: "Flight Status",
      description: "Get your ticket and boarding pass directly on your email.",
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-40 py-20 bg-gradient-to-r from-yellow-200 to-blue-300">
      <h1 className="text-2xl text-black mt-3">Quick Links</h1>
      <h1 className="text-black mb-10 text-4xl font-bold">Need Some help?</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
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
