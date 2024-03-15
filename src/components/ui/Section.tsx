import React, { CSSProperties, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

function Section({ children, className, style }: SectionProps) {
  return (
    <div
      style={style}
      className={cn(
        "flex items-center w-full max-w-screen-xl mx-auto px-4 md:px-6 xl:px-8 z-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Section;
