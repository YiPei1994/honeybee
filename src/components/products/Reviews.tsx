import React from "react";
import BackgroundWrapper from "../ui/BackgroundWrapper";
import ReviewsSlider from "./ReviewsSlider";
import Section from "../ui/Section";

function Reviews() {
  const bgImage = "bgTwo.png";
  return (
    <BackgroundWrapper
      className="min-h-[80vh] md:min-h-[55vh] lg:min-h-[60vh] xl:min-h-[60vh] md:py-10 "
      bgImage={bgImage}
    >
      <Section>
        <ReviewsSlider />
      </Section>
    </BackgroundWrapper>
  );
}

export default Reviews;
