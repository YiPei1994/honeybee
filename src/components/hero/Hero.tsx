import React from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";

function Hero() {
  return (
    <>
      <div id="intro" className="w-full  absolute left-0   z-0 bg-slate-50 ">
        <img src="hero_bg.png" alt="heroImg" />
      </div>
      <Section className="relative z-10">
        <div className="gap-1 lg:gap-3 flex flex-col w-3/5 max-w-[370px]">
          <p className="uppercase md:text-xl lg:text-2xl">
            fresh & sweet as honey
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-7xl uppercase">
            Honey Bee
          </h1>
          <p className="text-xs md:text-lg lg:text-xl">
            Honey, a gift from nature, delights the senses with its unparalleled
            sweetness and timeless allure.
          </p>
          <Button className="my-2 ">View More</Button>
        </div>
      </Section>
    </>
  );
}

export default Hero;
