import React from "react";
import Section from "../ui/Section";
import MobilGallery from "./MobilGallery";
import DesktopGallery from "./DesktopGallery";
import BackgroundWrapper from "../ui/BackgroundWrapper";

function Gallery() {
  return (
    <BackgroundWrapper
      id="gallery"
      className="bg-[#FCFAF9] min-h-[50vh] md:min-h-[50vh]"
    >
      <Section>
        <div className="flex flex-col justify-center items-center md:items-center gap-4 xl:items-center py-4 md:py-6 lg:py-8 m-auto">
          <header className="flex flex-col justify-center items-center gap-4 md:w-2/3 text-center my-4 lg:my-8">
            <h2>
              Our <br /> Gallery
            </h2>
            <p>
              {" "}
              Mellifera is a true beehive of activity! Check out the latest news
              and events in our image gallery and see for yourself.
            </p>
          </header>
          <MobilGallery />
          <DesktopGallery />
        </div>
      </Section>
    </BackgroundWrapper>
  );
}

export default Gallery;
