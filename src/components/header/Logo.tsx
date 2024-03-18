import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="w-[150px] h-auto">
      <Link href="/">
        <Image
          width={150}
          height={50}
          priority
          src="/logo_bee.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
