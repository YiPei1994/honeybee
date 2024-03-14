"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useDisplayHeader, useDisplayNavbar } from "../../../store/navbarStore";
import Navbar from "./Navbar";
import Section from "../ui/Section";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const { displayNavbar, toggleDisplayNavbar } = useDisplayNavbar();
  const { displayHeader, showDisplayHeader, hideDisplayHeader } =
    useDisplayHeader();

  function changeNavbar() {
    setScrollY(window.scrollY);
    if (scrollY > 50) {
      showDisplayHeader();
    } else {
      hideDisplayHeader();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, [scrollY]);

  console.log(scrollY, displayHeader);
  return (
    <div
      className={`p-4 border-b border-accent/50 md:border-none flex items-center justify-center  transition-all duration-300  top-0 z-30 w-full ${
        displayHeader ? "fixed bg-slate-50" : "relative bg-transparent"
      }`}
    >
      <div className="max-w-screen-lg flex items-center flex-wrap md:flex-nowrap justify-between w-full">
        <div className="flex justify-between items-center w-full ">
          <Logo />
          <button className="md:hidden" onClick={() => toggleDisplayNavbar()}>
            {displayNavbar ? <FaXmark className="text-primary" /> : <FaBars />}
          </button>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
