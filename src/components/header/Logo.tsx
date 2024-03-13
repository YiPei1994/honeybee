import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="w-[150px] h-auto">
      <Link href="/">
        <Image
          width={150}
          height={150}
          priority
          src="honey_logo.svg"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
