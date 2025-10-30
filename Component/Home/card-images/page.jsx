import React from "react";


export default function CardImages() {
  const button = [
    { name: "All" },
    { name: "Flight" },
    { name: "Hotel" },
    { name: "Holidays" },
  ];
  const cardData = [
    {
      img: "/Mask group.png",
      button: "Explore Now",
      description:
        " Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic Air Tickets",
    },
    {
      img: "/Mask group (1).png",
      button: "Explore Now",
      description:
        "Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic Air Tickets",
    },
    {
      img: "/Mask group (3).png",
      button: "Explore Now",
      description:
        " Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic Air Tickets ",
    },
    {
      img: "/Mask group (2).png",
      button: "Explore Now",
      description:
        "Up To BDT 1000 Flat Discount for EBL Visa Cardholders on Domestic Air Tickets",
    },
  ];
  return (
    <div className="px-6 md:px-16 xl:px-40 py-16 bg-[#f4faff]">
      {/* Our Promotions */}

      <div className=" mb-2 md:flex md:justify-between items-center">
        <h1 className="text-black text-3xl md:text-4xl mb-10 font-bold mt-20">
          Our Promotions
        </h1>
        {/* Tabs */}
        <div className="bg-white text-black rounded-2xl mt-10 ">
          <ul className="menu menu-horizontal px-1 gap-4">
            {button.map((btn, i) => (
              <li
                key={i}
                className="hover:cursor-pointer rounded-xl hover:bg-yellow-500 px-4 py-2"
              >
                {btn.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Promo Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="md:flex gap-6 bg-white p-4 rounded-2xl shadow-lg"
          >
            <img
              src={card.img}
              alt={`Promo ${i + 1}`}
              className="rounded-2xl w-full md:w-[180px] h-auto object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-black mt-4 md:mt-0 mb-4 text-lg">
                {card.description}
              </p>
              <button className="btn bg-gradient-to-r from-[#F6AA38] to-[#FFD335] border-none rounded-sm text-black text-lg px-4 py-2 w-fit">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
