"use client";
import React, { useEffect, useState } from "react";
import { products } from "../../../utils/constants";
import Product from "./Product";

function ProductSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSlide === products.length) {
        setActiveSlide(0);
      }
      setActiveSlide((prevSlide) => prevSlide + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="relative w-full  h-[565px] md:h-[700px] lg:h-max md:w-2/3 lg:w-full xl:w-full flex items-baseline justify-center my-4">
      {products.map((product) => (
        <Product key={product.id} product={product} activeSlide={activeSlide} />
      ))}
    </div>
  );
}

export default ProductSlider;
