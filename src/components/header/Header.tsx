"use client";

import React from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useDisplayNavbar } from "../../../store/useDisplayNavbar";
import Navbar from "./Navbar";
import Section from "../ui/Section";

function Header() {
  const { displayNavbar, toggleDisplayNavbar } = useDisplayNavbar();
  return (
    <Section className="p-4 border-b border-accent/50 md:border-none  flex-wrap md:flex-nowrap justify-between">
      <div className="flex justify-between items-center w-full ">
        <Logo />
        <button className="md:hidden" onClick={() => toggleDisplayNavbar()}>
          {displayNavbar ? <FaXmark className="text-primary" /> : <FaBars />}
        </button>
      </div>
      <Navbar />
    </Section>
  );
}

export default Header;
