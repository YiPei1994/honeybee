import React, { ReactNode } from "react";
import { cn } from "../../../utils/cn";

type BackgroundWrapperProps = {
  children: ReactNode;
  bgImage: string;
  className?: string;
};

function BackgroundWrapper({
  children,
  className,
  bgImage,
}: BackgroundWrapperProps) {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={cn(
        "w-full min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen  bg-scroll flex bg-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default BackgroundWrapper;
