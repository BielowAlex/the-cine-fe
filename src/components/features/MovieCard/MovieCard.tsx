import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

interface IProps {
  id: number;
  title: string;
  poster: string;
  className?: string;
}

const MovieCard: FC<IProps> = ({ id, title, poster, className }) => {
  return (
    <div
      className={cn(
        "relative w-[320px] h-[450px] rounded-2xl overflow-hidden border border-black hover:border-amber-500 duration-75 ease-linear cursor-pointer",
        className
      )}
    >
      <Link
        href={`/movies/${id}`}
        className=" relative block min-w-full min-h-full  "
      >
        <h4 className="absolute z-20 bottom-0 left-0 w-full p-2 uppercase font-bold shadow-[inset_-1px_1px_40px_rgba(0,0,0,0.6)] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {title}
        </h4>
        {/*TODO: */}
        <Image
          width={320}
          height={450}
          src={poster}
          alt={title}
          className="absolute z-10 left-0 top-0 object-cover w-full min-h-[450px] hover:opacity-[0.5] duration-75 ease-linear "
        />
      </Link>
    </div>
  );
};

export { MovieCard };
