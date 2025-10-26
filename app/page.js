import TopAndAdvantage from "./top-and-advantage/page"
import Banner from "./Banner/page";
import CardImages from "./card-images/page";
import AdvantageSection from "./TakeoffAdvantage/page";
import HalpSupport from "./help/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner/>
      <CardImages/>
      <TopAndAdvantage/>
      <AdvantageSection/>
      <HalpSupport/>
      <Footer/>
    </div>
  );
}
