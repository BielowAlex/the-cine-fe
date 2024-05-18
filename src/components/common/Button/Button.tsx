import React, { FC, ReactNode } from "react";
import cn from "classnames";
import Link from "next/link";

interface IProps {
  children: ReactNode;
  href?: string;
  handleClick?: () => void;
  className?: string;
}

const Button: FC<IProps> = ({ children, href, handleClick, className }) => {
  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={cn(
          className,
          "flex justify-center gap-2 items-center text-base p-[5px] text-amber-500 border border-amber-500 rounded-md hover:bg-amber-500 hover:text-black ease-linear duration-300"
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        className,
        "flex justify-center gap-2 items-center text-base p-[5px] text-amber-500 border border-amber-500 rounded-md hover:opacity-[0.5] ease-linear duration-75"
      )}
    >
      {children}
    </button>
  );
};

export { Button };
