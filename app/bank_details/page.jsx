import Image from "next/image";
import React from "react";

export default function BankDetailsPage() {
  const bankDetails = [
    {
      id: 1,
      imgSrc: "/Dutch-logo.jpg",
      name: "Dutch Bangla Bank Limited",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: "1471200002257",
      branch: "Bashundhara Branch, Dhaka",
      swiftCode: "DBBLBDDH",
      routingNumber: "090260555",
    },
    {
      id: 1,
      imgSrc: "/standard.webp",
      name: "Standard Chartered Bank",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: "01917086901",
      branch: "Gulshan-1, Dhaka",
      swiftCode: "SCBLBDDX",
      routingNumber: "215261726",
    },
    {
      id: 1,
      imgSrc: "/city.png",
      name: "City Bank",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: "1502435878001",
      branch: "Banani Branch, Dhaka",
      swiftCode: "CIBLBDDH",
      routingNumber: " 225260438",
    },
    {
      id: 1,
      imgSrc: "/bankasia.jpg",
      name: "Bank Asia",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: "02833001308",
      branch: " Mohakhali Branch, Dhaka",
      swiftCode: "BALBBDDH028",
      routingNumber: "070263198",
    },
    {
      id: 1,
      imgSrc: "/Midland.png",
      name: "Midland Bank",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: " 9905-1090000713",
      branch: " Khulna Branch, Dhaka",
      swiftCode: "MDBLBDDH",
      routingNumber: "285471546",
    },
    {
      id: 1,
      imgSrc: "/islami.jpg",
      name: "Islami Bank Bangladesh",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: "20501770100478002",
      branch: "Corporate Branch Gulshan-2, Dhaka",
      swiftCode: " IBBLBDDH177",
      routingNumber: "125261724",
    },
    {
      id: 1,
      imgSrc: "/BRAC-BANK.webp",
      name: "Dutch Bangla Bank Limited",
      accountName: "TAKEOFF TRAVELS",
      accountNumber: "2026077450002",
      branch: "Banani Branch, Dhaka",
      swiftCode: "BRAKBDDH",
      routingNumber: " 060260435",
    },
  ];
  const mobileBank=[{
    id:1,
    imgSrc:"/bkash.svg.png",
    number:"01779999938"
  },
  {
    id:2,
    imgSrc:"/Item (1).png",
    number:"01779999938"
  },
  {
    id:3,
    imgSrc:"/Item (2).png",
    number:"01779999938"
  },
  {
    id:4,
    imgSrc:"/bkash.svg.png",
    number:"01779999938"
  }]
  return (
    // Add more bank details as needed

    <div className="bg-gray-100 xl:pl-60 xl:pr-60 pt-30 md:p-30 justify-center items-center text-center">
      <h1 className="font-bold text-4xl text-amber-400 ">Payment Options</h1>
      <p className="text-red-500 mt-4">
        We accept all the following payment methods
      </p>
      <p className="text-2xl text-blue-950 font-bold mt-8">DIRECT BANKING</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6  mt-20 xl:ml-20 m-4 xl:mr-20 ">
        {bankDetails.map((bank, i) => (
          <div key={i} className=" grid justify-center bg-white rounded-xl shadow-md p-10 place-items-center text-center hover:bg-gray-200">
            <Image
              src={`${bank.imgSrc}`}
              alt="Bank 1"
              width={150}
              height={150}
              className="w-30  h-auto"
            />
            <h1 className="text-xl font-bold mt-10 mb-4 text-blue-950">
              {bank.name} 
            </h1>
            <div className="grid gap-2">
              <h3 className=" text-gray-700 font-bold">
                Account Name:
                <samp className="text-gray-500 font-normal">
                  {bank.accountName}
                </samp>
              </h3>
              <h3 className=" text-gray-700 font-bold">
                Account Number:
                <samp className="text-gray-500 font-normal">
                 
                  {bank.accountNumber}
                </samp>
              </h3>
              <h3 className=" text-gray-700 font-bold">
                Branch:
                <samp className="text-gray-500 font-normal">
                  {bank.branch}
                </samp>
              </h3>
              <h3 className=" text-gray-700 font-bold">
                SWIFT Code:
                <samp className="text-gray-500 font-normal">{bank.swiftCode}</samp>
              </h3>
              <h3 className=" text-gray-700 font-bold">
                Routing Number:
                <samp className="text-gray-500 font-normal">{bank.routingNumber}</samp>
              </h3>
            </div>
          </div>
        ))}
        

      </div>

      <div className="mt-10">
        <h1 className="text-black font-bold text-2xl">MOBILE BANKING</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 ">

         { mobileBank.map((mobile,i)=>(
          <div key={i} className="bg-white rounded-xl shadow-md flex justify-center gap-6 items-center  p-4  hover:bg-gray-200">
            <Image
              src={mobile.imgSrc}
              alt="bKash"
              width={100}
              height={100}
              quality={100}
              className="object-contain"
            />
            <p className="text-gray-500">{mobile.number}</p>
          </div>
         ))}
       
        </div>
      </div>
    </div>
  );
}
