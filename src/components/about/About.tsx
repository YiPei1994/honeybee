import React from "react";
import Section from "../ui/Section";
import AboutMission from "./AboutMission";
import AboutNews from "./AboutNews";
import BackgroundWrapper from "../ui/BackgroundWrapper";

function About() {
  return (
    <BackgroundWrapper id="about" className="bg-[#FCFAF9]">
      <Section>
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:items-stretch py-4 md:py-6 lg:py-8">
          <AboutMission />
          <AboutNews />
        </div>
      </Section>
    </BackgroundWrapper>
  );
}

export default About;
