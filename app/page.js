import Image from "next/image";
import Banner from "./Banner/page";
import CardImages from "./card-images/page";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner/>
      <CardImages/>
    </div>
  );
}
