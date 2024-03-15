import React from "react";
import Section from "../ui/Section";
import AboutMission from "./AboutMission";
import AboutNews from "./AboutNews";

function About() {
  return (
    <Section className="bg-[#FCFAF9]">
      <div className="max-w-screen-xl p-4 lg:p-12 flex flex-col xl:flex-row justify-between gap-4 xl:items-stretch">
        <AboutMission />
        <AboutNews />
      </div>
    </Section>
  );
}

export default About;
