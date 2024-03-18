import React from "react";
import { gallery } from "../../../utils/constants";
import Image from "next/image";

function DesktopGallery() {
  return (
    <div className="hidden lg:flex  flex-wrap">
      {gallery.map((image) => (
        <Image
          className="w-1/3 p-2"
          width={350}
          height={300}
          key={image.id}
          src={image.imageUrl}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default DesktopGallery;
