"use client";

import Link from "next/link";
import React from "react";
import { useDisplayNavbar } from "../../../store/navbarStore";

function Navbar() {
  const { displayNavbar, toggleDisplayNavbar } = useDisplayNavbar();

  return (
    <>
      <nav
        className={`${
          displayNavbar
            ? "max-h-[350px] pointer-events-auto opacity-100"
            : "max-h-0 pointer-events-none opacity-0"
        } transition-all duration-300 md:hidden w-full `}
      >
        <ul className="flex flex-col gap-2 justify-center items-center pt-6 pb-4">
          <li
            onClick={() => toggleDisplayNavbar()}
            className="hover:text-primary focus:text-primary"
          >
            <Link href="#hero" scroll={false}>
              Home
            </Link>
          </li>
          <li
            onClick={() => toggleDisplayNavbar()}
            className="hover:text-primary focus:text-primary"
          >
            <Link href="#about" scroll={false}>
              About
            </Link>
          </li>
          <li
            onClick={() => toggleDisplayNavbar()}
            className="hover:text-primary focus:text-primary"
          >
            <Link href="#products" scroll={false}>
              Products
            </Link>
          </li>
          <li
            onClick={() => toggleDisplayNavbar()}
            className="hover:text-primary focus:text-primary"
          >
            <Link href="#blog" scroll={false}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="hidden md:block md:mr-4">
        <ul className="flex flex-row gap-4 justify-center items-center ">
          <li onClick={() => toggleDisplayNavbar()}>
            <Link
              href="#hero"
              scroll={false}
              className="hover:text-primary focus:text-primary"
            >
              Home
            </Link>
          </li>
          <li onClick={() => toggleDisplayNavbar()}>
            <Link
              href="#about"
              scroll={false}
              className="hover:text-primary focus:text-primary"
            >
              About
            </Link>
          </li>
          <li onClick={() => toggleDisplayNavbar()}>
            <Link
              href="#products"
              scroll={false}
              className="hover:text-primary focus:text-primary"
            >
              Products
            </Link>
          </li>
          <li onClick={() => toggleDisplayNavbar()}>
            <Link
              href="#blog"
              scroll={false}
              className="hover:text-primary focus:text-primary"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
