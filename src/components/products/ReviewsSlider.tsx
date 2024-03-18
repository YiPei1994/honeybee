"use client";
import React, { useEffect, useState } from "react";
import { reviews } from "../../../utils/constants";
import Review from "./Review";

function ReviewsSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSlide === reviews.length) {
        setActiveSlide(0);
      }
      setActiveSlide((prevSlide) => prevSlide + 1);
    }, 15000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="relative w-full h-full lg:w-4/5 m-auto flex items-center justify-center  my-4">
      {reviews.map((review) => (
        <Review key={review.id} review={review} activeSlide={activeSlide} />
      ))}
    </div>
  );
}

export default ReviewsSlider;
