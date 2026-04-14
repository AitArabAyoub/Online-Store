"use client";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  const imgs = [
    {
      link: "/src/img/banner_Hero1.jpg",
      title: "Outwear Picks",
      desc: "Stock up on sportswear and limited edition collections",
    },
    {
      link: "/src/img/banner_Hero2.jpg",
      title: "Best For Men",
      desc: "Discover premium styles for men",
    },
    {
      link: "/src/img/banner_Hero3.jpg",
      title: "Seasonal Offers",
      desc: "Don’t miss our exclusive deals",
    },
  ];

  return (
    <Carousel
      className="w-full h-[calc(h-100vh - 113,6px)] relative pt-10"
      plugins={[plugin.current]}
    >
      <CarouselContent className="h-full">
        {imgs.map((el, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="h-full relative">
              {/* Image */}
              <img
                src={el.link}
                alt="banner"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0" />

              {/* Text */}
              <div className="absolute top-1/2 left-10  text-white">
                <h2 className="text-6xl font-bold">{el.title}</h2>
                <p className="text-2xl mt-2">{el.desc}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-5" />
      <CarouselNext className="absolute right-5" />
    </Carousel>
  );
}
