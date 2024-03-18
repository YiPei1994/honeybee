import React from "react";
import Section from "../ui/Section";
import BackgroundWrapper from "../ui/BackgroundWrapper";
import ProductSlider from "./ProductSlider";

function Products() {
  const bgImage = "bgOne.png";
  return (
    <BackgroundWrapper id="products" bgImage={bgImage}>
      <Section>
        <div className="flex flex-col justify-center items-start md:items-center gap-4 xl:items-center py-4 md:py-6 lg:py-8">
          <header className="flex flex-col justify-center items-center gap-4 md:w-2/3 text-center my-4 lg:my-8">
            <h2>
              Our <br /> Products
            </h2>
            <p>
              {" "}
              Check out our online shop for cute bee-themed apparel, unique bee
              suits, educational tools, gift certificates and more.{" "}
            </p>
          </header>
          <ProductSlider />
        </div>
      </Section>
    </BackgroundWrapper>
  );
}

export default Products;
