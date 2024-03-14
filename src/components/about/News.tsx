import React from "react";
import { News } from "../../../utils/type";

type NewsProps = {
  news: News;
};

function News({ news }: NewsProps) {
  return (
    <div className="flex flex-col gap-2 w-[95%] md:w-[46%] md:mb-12 px-4 xl:w-[100%] xl:px-0 xl:py-4">
      <p className="text-primary">{news.date}</p>
      <h4 className="text-xl">{news.title} </h4>
      <p className="text-sm">{news.detail} </p>
    </div>
  );
}

export default News;
