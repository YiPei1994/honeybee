import React from "react";
import { Review } from "../../../utils/type";
import Image from "next/image";

type ReviewProps = {
  review: Review;
  activeSlide: number;
};

function Review({ review, activeSlide }: ReviewProps) {
  return (
    <div
      className={`${
        activeSlide === review.id ? " opacity-100" : " opacity-0"
      } absolute left-0  transition-all duration-300 ease-out w-full md:flex-row flex gap-4 flex-col justify-center lg:gap-8 items-center md:justify-start`}
    >
      <figure className="w-4/5  lg:w-1/5 relative flex items-center justify-center">
        <Image
          className="absolute -right-5 -top-5  z-10"
          width={50}
          height={50}
          src="/quoteMark.png"
          alt="quote mark"
        />
        <Image
          width={310}
          height={350}
          src={review.imageUrl}
          alt={review.name}
        />
        <Image
          className="absolute -left-5 -bottom-5  z-10 rotate-180"
          width={50}
          height={50}
          src="/quoteMark.png"
          alt="quote mark"
        />
      </figure>
      <div className="w-4/5 lg:w-3/5 py-4">
        <p className="uppercase text-xl max-w-full">{review.comment} </p>
        <h4 className="text-primary uppercase text-xl max-w-full">
          {review.name}{" "}
        </h4>
      </div>
    </div>
  );
}

export default Review;
