"use client";

import React, { useEffect } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useDisplayNavbar } from "../../../store/navbarStore";
import Navbar from "./Navbar";
import { FloatingNav } from "../ui/FloatingNavbar";
import { navItems } from "../../../utils/constants";

function Header() {
  const { displayNavbar, toggleDisplayNavbar } = useDisplayNavbar();

  return (
    <div
      className={`p-4 md:p-6 xl:px-8 border-b border-accent/50  top-0 md:border-none flex items-center justify-center left-0  transition-all duration-300  z-30 w-full }`}
    >
      <div className="max-w-screen-xl flex items-center flex-wrap md:flex-nowrap justify-between w-full">
        <div className="flex justify-between items-center w-full ">
          <Logo />
          <button className="md:hidden" onClick={() => toggleDisplayNavbar()}>
            {displayNavbar ? <FaXmark className="text-primary" /> : <FaBars />}
          </button>
        </div>
        <Navbar />
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
}

export default Header;
