import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className="pt-30  min-h-screen  bg-gray-100 2xl:pl-70 p-6 2xl:pr-70 xl:pl-25 xl:pr-25 md:pl-20 md:pr-20   w-full h-full items-center justify-center">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6  ">
        <div className="grid grid-cols-1  justify-center items-center p-4 rounded-lg bg-white ">
          <h1
            className="relative  block text-3xl after:mx-auto text-center font-semibold text-black mb-4 
  after:content-[''] after:block after:w-6 after:h-[2px] after:bg-black after:mt-2"
          >
            Keep In Touch
          </h1>

          <div className="flex  items-center gap-8">
            <div className="hidden md:block text-green-600 bg-amber-100 p-5 text-3xl rounded-lg">
              <FaPhone />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <h1 className="text-lg font-semibold">WhatsApp & WeChat -</h1>
                <p>
                  013 29 702731 - (Mr.Raju)
                  <br />
                  013 29 702732 - (Mr.Shahriar)
                  <br />
                  013 29 702733 - (Mr.Mohiuddin)
                  <br />
                  013 29 702734 - (Miss.Pushpita)
                  <br />
                  013 29 702735 - (Mr.Nipu)
                  <br />
                  013 29 702740 - (Mr.Ashik)
                  <br />
                  013 29 702744 - (Mr.Saad)
                  <br />
                  013 29 702730 - (Mr.Mamun)
                </p>
              </div>
              <div className="">
                <h1 className="text-lg font-semibold">Hotline -</h1>
                <div>
                  <a
                    href="tel:09647778899"
                    className="text-sm leading-6 no-underline"
                  >
                    09647778899
                  </a>
                  <span>,</span>
                  <br />
                  <a
                    href="tel:+8801779999938"
                    className="text-sm leading-6 no-underline"
                  >
                    +8801779999938
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 ">
            <div className="hidden md:block text-blue-600 bg-blue-100 p-5 text-3xl rounded-lg">
              <MdOutlineMailOutline />
            </div>
            <div>
              <h1 className="text-lg font-semibold mt-8">Our Email</h1>
              <p>
                support@takeoffbd.com
                <br />
                sales@takeoffbd.com
                <br />
                ticket@takeoffbd.com
                <br />
                accounts@takeoffbd.com
                <br />
                holidays@takeoffbd.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 mt-8">
            <div className="hidden md:block text-red-600 bg-blue-50 p-5 text-3xl rounded-lg">
              <ImLocation />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Our Address</h1>
              <p>
                Alam Bhaban, House # 51 1st floor, Rd No 17,
                <br />
                Banani C/A, Dhaka 1213, BD.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  justify-center items-center p-4 rounded-lg bg-white ">
          <h1
            className="relative  block text-3xl after:mx-auto text-center font-semibold text-black mb-6 
  after:content-[''] after:block after:w-6 after:h-[2px] after:bg-black after:mt-2 "
          >
            Contact Us
          </h1>
          <div className=" grid grid-cols-1 gap-4 ">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              className="w-full border rounded-lg p-4"
              maxLength={1000}
            />
            <div className="flex justify-end mt-3 mb-50">
              <Button
                variant="outline"
                className={`bg-orange-500 text-white relative `}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10 mb-20">
        <div className="w-full  rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7151740705485!2d90.40466177607988!3d23.79315488713228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70ebd7c0311%3A0x67c4796fcdb9c40d!2sTakeoff%20Travels!5e0!3m2!1sen!2sbd!4v1762073184196!5m2!1sen!2sbd"
            className="w-full h-[300px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
