import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#FCFAF9] w-full p-4 flex flex-col gap-4 justify-center items-center">
      <div className="flex gap-2">
        <Link
          className="text-primary text-4xl"
          href="https://github.com/YiPei1994"
          target="_blank"
        >
          <FaSquareGithub />
        </Link>
        <Link
          className="text-primary text-4xl"
          href="https://www.linkedin.com/in/yipeizhu/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
      <Image width={30} height={30} src="/footer_bee.png" alt="bee" />
      <div className="flex flex-col gap-2 place-items-center text-center">
        <p className="text-sm">Created by Yi Pei Zhu.</p>
        <p className="text-sm">Copyright © 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
