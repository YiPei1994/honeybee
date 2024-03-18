import React from "react";
import { NewsType } from "../../../utils/type";

type NewsProps = {
  news: NewsType;
};

function News({ news }: NewsProps) {
  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-[46%] md:mb-4  xl:w-[90%] xl:px-0 xl:py-4">
      <p className="text-primary">{news.date}</p>
      <h4>{news.title} </h4>
      <span className="text-sm">{news.detail} </span>
    </div>
  );
}

export default News;
