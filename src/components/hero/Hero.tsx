import React from "react";
import Section from "../ui/Section";
import Image from "next/image";
import Button from "../ui/Button";

function Hero() {
  const bgImage = "hero_bg.png";
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover flex bg-center bg-no-repeat w-full min-h-[35vh] lg:h-[67vh] xl:h-screen absolute left-0 top-0 z-0"
      ></div>
      <Section className="  relative xl:h-[90vh] w-full justify-between  m-4 lg:m-12 xl:mx-auto">
        <div className="w-3/5 flex gap-2 flex-col max-w-[370px] ">
          <p className="text-md md:text-lg lg:text-xl uppercase">
            fresh & sweet as honey
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase">
            Honey Bee
          </h1>
          <p className="text-sm md:text-md xl:text-xl ">
            Honey, a gift from nature, delights the senses with its unparalleled
            sweetness and timeless allure.
          </p>
          <Button className="my-2">View More</Button>
        </div>
        <div className="w-2/5 md:w-max">
          <Image
            width={500}
            height={500}
            priority
            src="/honey_hero.png"
            alt="hero honey"
          />
        </div>
      </Section>
    </>
  );
}

export default Hero;
