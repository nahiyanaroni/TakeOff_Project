import React from "react";

export default function AdvantageSection() {
  const advantages = [
    {
      imgSrc: "Payment.png",
      title: "Automated Payment System",
      description:
        "Upload fund hassle free to your account with all payment modes",
    },
    {
      imgSrc: "API.png",
      title: "API Integration",
      description: "100 + Airlines and 100,000 + Hotels",
    },
    {
      imgSrc: "World.png",
      title: "Worldwide Airfares",
      description:
        "Get fares from 50+ countries and book flight deals with huge discounts",
    },
    {
      imgSrc: "Hotel.png",
      title: "20+ Hotels Partners",
      description: "Enjoy amazing hotel deals for your customers",
    },
    {
      imgSrc: "Automation.png",
      title: "Post Booking Service Automation",
      description: "Handle all your bookings completely online",
    },
    {
      imgSrc: "User.png",
      title: "Mobile Friendly User Interface",
      description: "Users can easily manage their business",
    },
  ];

  return (
    <div className="px-6 md:px-16 xl:px-40 py-20 top-0">
      <h1 className="text-black mb-10 text-4xl font-bold">
        The TakeOff Advantage
      </h1>
      <div className="grid md:grid-cols-2   xl:grid-cols-3 gap-6 w-full">
        {advantages.map((adv, i) => (
          <div
            key={i}
            className="group hover:bg-yellow-500  bg-white rounded-xl shadow-md p-6 cursor-pointer"
          >
            <img
              src={adv.imgSrc}
              alt={`download ${i + 1}`}
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl text-black group-hover:text-white font-bold mt-4 transition-colors duration-300">
              {adv.title}
            </h1>
            <p className="text-gray-600 mt-2 group-hover:text-white transition-colors duration-300">
              {adv.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
