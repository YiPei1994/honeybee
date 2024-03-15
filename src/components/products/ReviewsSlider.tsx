"use client";
import React, { useEffect, useState } from "react";
import { reviews } from "../../../utils/constants";
import Review from "./Review";

function ReviewsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSlide === reviews.length) {
        setActiveSlide(0);
      }
      setActiveSlide((prevSlide) => prevSlide + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="relative w-full h-full lg:w-full xl:w-full flex items-baseline justify-center  my-4">
      {reviews.map((review) => (
        <Review key={review.id} review={review} activeSlide={activeSlide} />
      ))}
    </div>
  );
}

export default ReviewsSlider;
