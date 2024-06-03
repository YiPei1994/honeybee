import React from "react";
import Section from "../ui/Section";
import Image from "next/image";
import Button from "../ui/Button";
import BackgroundWrapper from "../ui/BackgroundWrapper";
import Link from "next/link";

function Hero() {
  const bgImage = "hero_bg.png";
  return (
    <BackgroundWrapper
      id="intro"
      className="min-h-[50vh] md:min-h-[50vh]"
      bgImage={bgImage}
    >
      <Section className=" relative xl:h-screen w-full justify-between  xl:mx-auto bg-cover">
        <div className="w-3/5 flex gap-2 flex-col max-w-[370px] xl:max-w-[550px]  ">
          <p className="text-md md:text-lg lg:text-xl uppercase">
            fresh & sweet as honey
          </p>
          <h1>Honey Bee</h1>
          <span className="text-sm md:text-md xl:text-xl ">
            Honey, a gift from nature, delights the senses with its unparalleled
            sweetness and timeless allure.
          </span>
          <Button className="my-2">
            <Link href="#about">View More</Link>
          </Button>
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
    </BackgroundWrapper>
  );
}

export default Hero;
