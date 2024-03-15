"use client";

import React from "react";
import { newsArray } from "../../../utils/constants";
import News from "./News";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutNews() {
  const sortedArray = newsArray.sort((a, b) => b.id - a.id);
  return (
    <div className="flex flex-col relative">
      <h2>
        New
        <br />s
      </h2>
      <motion.div
        className="absolute right-5"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 60, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2,
          type: "spring",
        }}
      >
        <Image src="/bee.png" alt="bee" width={50} height={50} />
      </motion.div>
      <div className="overflow-y-scroll scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-active w-full h-[400px] xl:h-[540px] md:flex  md:flex-row md:items-center  md:flex-wrap md:justify-between xl:flex-col xl:flex-nowrap">
        {sortedArray.map((news) => (
          <News news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
}

export default AboutNews;
