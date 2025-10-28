import React from "react";


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
  {supportItems.map((item, i) => (
   <div
   key={i} className=" bg-white rounded-xl shadow-md p-6 cursor-pointer  hover:scale-110 transition ">
     <div className='flex  '>
     
       <img src={item.imgSrc} alt={`download ${i+1}`} className="w-16 h-16 object-contain" />
      <h1 className="text-2xl text-black font-bold mt-4">
        {item.title}
      </h1>
     </div>
      <p className="text-gray-600 mt-2">
        {item.description}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}
