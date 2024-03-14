"use client";
import React, { useEffect, useState } from "react";
import { aboutImages } from "../../../utils/constants";
import Image from "next/image";

function ImageSlider() {
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
    <div className="relative w-full md:w-1/2 h-[240px] md:h-[280px] lg:h-[320px] xl:w-full">
      {aboutImages.map((image) => (
        <p
          key={image.id}
          className={`${
            activeSlide === image.id ? " opacity-100" : " opacity-0"
          } absolute left-0 top-0 transition-all duration-300 ease-out`}
        >
          <Image
            width={500}
            height={500}
            src={image.imageUrl}
            alt={image.alt}
          />
        </p>
      ))}
    </div>
  );
}

export default ImageSlider;
