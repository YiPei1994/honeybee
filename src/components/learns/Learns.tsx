import React from "react";
import BackgroundWrapper from "../ui/BackgroundWrapper";
import Section from "../ui/Section";
import HoneyTypes from "./HoneyTypes";

function Learns() {
  const bgImg = "bg4.png";
  return (
    <BackgroundWrapper
      id="blog"
      bgImage={bgImg}
      className="md:min-h-[80vh] lg:min-h-[80vh] xl:min-h-[60vh]"
    >
      <Section>
        <div className="flex flex-col justify-center items-center md:items-center gap-4 xl:items-center py-4 md:py-6 lg:py-8">
          <header className="flex flex-col justify-center items-center gap-4 w-2/3 text-center my-4 lg:my-8">
            <h2>
              Types of <br /> honey
            </h2>
            <p>
              Learn more about some of the products we take special pride in.
            </p>
          </header>
          <HoneyTypes />
        </div>
      </Section>
    </BackgroundWrapper>
  );
}

export default Learns;
