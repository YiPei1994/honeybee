import React, { ReactNode } from "react";
import { cn } from "../../../utils/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className }: SectionProps) {
  return (
    <div
      className={cn(
        "flex items-center w-full max-w-screen-xl m-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Section;
