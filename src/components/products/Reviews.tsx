import React from "react";
import BackgroundWrapper from "../ui/BackgroundWrapper";
import ReviewsSlider from "./ReviewsSlider";
import Section from "../ui/Section";

function Reviews() {
  const bgImage = "bgTwo.png";
  return (
    <BackgroundWrapper
      id="reviews"
      className="min-h-[100vh] md:min-h-[65vh] lg:min-h-[60vh] xl:min-h-[60vh] md:py-10 "
      bgImage={bgImage}
    >
      <Section>
        <ReviewsSlider />
      </Section>
    </BackgroundWrapper>
  );
}

export default Reviews;
