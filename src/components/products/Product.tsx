import React from "react";
import { Product } from "../../../utils/type";
import Image from "next/image";
import Button from "../ui/Button";

type ProductProps = {
  product: Product;
  activeSlide: number;
};

function Product({ product, activeSlide }: ProductProps) {
  return (
    <div
      className={`${
        activeSlide === product.id ? " max-lg:opacity-100" : " max-lg:opacity-0"
      } max-lg:absolute left-0 max-lg:top-[50%] max-lg:-translate-y-[50%] transition-all duration-300 ease-out xl:w-1/3 flex flex-col gap-2 justify-center items-center`}
    >
      <figure>
        <Image
          width={500}
          height={500}
          src={product.imageUrl}
          alt={product.alt}
        />
      </figure>
      <div className="flex flex-col gap-2 xl:gap-4 max-lg:items-center">
        <h2 className="uppercase">{product.name} </h2>
        <h4 className="text-primary">{product.price} Kc </h4>
        <span>{product.description} </span>
        <Button>Order</Button>
      </div>
    </div>
  );
}

export default Product;
