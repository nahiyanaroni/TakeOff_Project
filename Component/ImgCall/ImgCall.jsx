"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImgCall() {
  const [photos, setPhotos] = useState([]);

  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );


  // ✅ API Call
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos") // free image API
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="px-6 md:px-16 xl:px-40 py-16 bg-[#f4faff]">
      <h1 className="text-black text-3xl md:text-4xl mb-6 font-bold">
        Exclusive Offer
      </h1>

      {/* ✅ Carousel */}
      <Carousel className="w-full max-w-16xl mx-auto"
       plugins={[autoplay.current]}
      opts={{ loop: true }}>
        <CarouselContent>
          {photos.map((img) => (
            <CarouselItem
              key={img.id}
              className="basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <div className="p-2">
                <Image
                  key={img.id}
                  src={"https://dummyjson.com/image/400x200/282828"}
                  alt="Download"
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
