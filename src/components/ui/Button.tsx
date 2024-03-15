import React, { ReactNode } from "react";
import { cn } from "../../../utils/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={cn(
        "w-fit px-4 py-2 bg-primary text-colorBase text-sm hover:bg-active uppercase mt-4 rounded-lg",
        className
      )}
      {...rest}
    >
      {children}{" "}
    </button>
  );
}

export default Button;
