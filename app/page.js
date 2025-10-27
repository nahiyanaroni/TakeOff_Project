import TopAndAdvantage from "../Component/Home/top-and-advantage/page"
import Banner from "../Component/Home/Banner/page";
import CardImages from "../Component/Home/card-images/page";
import AdvantageSection from "../Component/Home/TakeoffAdvantage/page";
import HalpSupport from "../Component/Home/help/page";
import Footer from "../Component/Home/Footer/page";
import FareCard from "@/Component/FareCard/FareCard";
import ImgCall from "@/Component/ImgCall/ImgCall";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner/>
      <ImgCall/>
      <CardImages/>
      <FareCard/>
      <TopAndAdvantage/>
      <AdvantageSection/>
      <HalpSupport/>
      <Footer/>
    </div>
  );
}
