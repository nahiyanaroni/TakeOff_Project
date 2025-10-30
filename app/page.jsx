import React from "react";
import Banner from "@/Component/Home/Banner/page";
import ImgCall from "@/Component/ImgCall/page";
import FareCard from "@/Component/FareCard/FareCard";
import TopAndAdvantage from "@/Component/Home/top-and-advantage/page";
import AdvantageSection from "@/Component/Home/TakeoffAdvantage/page";
import HalpSupport from "@/Component/Home/help/page";
import CardImages from "@/Component/Home/card-images/page";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner />
      <ImgCall />
      <CardImages />
      <FareCard />
      <TopAndAdvantage />
      <AdvantageSection />
      <HalpSupport />
    </div>
  );
}
