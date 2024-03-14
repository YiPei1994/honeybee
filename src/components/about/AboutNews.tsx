import React from "react";
import { newsArray } from "../../../utils/constants";
import News from "./News";

function AboutNews() {
  const sortedArray = newsArray.sort((a, b) => b.id - a.id);
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-4">
        New
        <br />s
      </h2>
      <div className="overflow-y-scroll scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-active w-full h-[480px] md:flex  md:flex-row md:items-center  md:flex-wrap md:justify-between xl:flex-col xl:flex-nowrap">
        {sortedArray.map((news) => (
          <News news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
}

export default AboutNews;
