import React from "react";
import { HoneyType } from "../../../utils/type";
import Image from "next/image";

type HoneyProps = {
  honey: HoneyType;
};

function Honey({ honey }: HoneyProps) {
  return (
    <div className="flex items-center gap-4 w-[90%]  justify-center mb-4 lg:w-[45%]">
      <figure className="w-1.5/5">
        <Image src={honey.imageUrl} alt={honey.alt} width={100} height={100} />
      </figure>
      <div className="w-3/5 ">
        <h4 className="mb-2">{honey.name} </h4>
        <p>{honey.description} </p>
      </div>
    </div>
  );
}

export default Honey;
