import React from "react";
import ImageSlider from "./ImageSlider";

function AboutMission() {
  return (
    <div className="flex gap-6 items-center md:mr-6 md:my-6 flex-col md:flex-row xl:flex-col-reverse xl:my-0">
      <div className="flex flex-col gap-2 w-full md:w-1/2 xl:w-full">
        <h2>
          Our <br /> Mission
        </h2>
        <span>
          The bees live as they naturally would and their benefits reach more
          people. Our goal is to raise europe’s bee population throughout the
          city and at the same time spread awareness among the community.
        </span>
        <span>
          Our hope is that these backyard hives will facilitate a dialogue among
          neighbours, friends, family and the community at large about the huge
          importance of bees.
        </span>
      </div>
      <ImageSlider />
    </div>
  );
}

export default AboutMission;
