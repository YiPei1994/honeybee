"use client";
import React, { useEffect, useState } from "react";
import { aboutImages, gallery } from "../../../utils/constants";
import Image from "next/image";

function MobilGallery() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSlide === aboutImages.length) {
        setActiveSlide(0);
      }
      setActiveSlide((prevSlide) => prevSlide + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="relative w-full md:w-1/2 h-[280px] lg:hidden flex items-center justify-center">
      {gallery.map((image) => (
        <div
          key={image.id}
          className={`${
            activeSlide === image.id ? " opacity-100" : " opacity-0"
          } absolute  transition-all duration-300 ease-out`}
        >
          <Image
            width={320}
            height={300}
            src={image.imageUrl}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default MobilGallery;
