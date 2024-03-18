import React from "react";
import { honeyType } from "../../../utils/constants";
import Honey from "./Honey";

function HoneyTypes() {
  return (
    <div className="flex gap-4 flex-wrap m-auto lg:w-[90%] lg:justify-around  justify-center items-center ">
      {honeyType.map((honey) => (
        <Honey honey={honey} key={honey.id} />
      ))}{" "}
    </div>
  );
}

export default HoneyTypes;
