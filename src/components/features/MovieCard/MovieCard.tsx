import React, { FC } from "react";
import Image from "next/image";

interface IProps {
  id: string;
  title: string;
  poster: string;
}

const MovieCard: FC<IProps> = ({ id, title, poster }) => {
  return (
    <div
      className="relative min-w-[320px] min-h-[450px] rounded-2xl overflow-hidden border border-black hover:border-amber-500 duration-75 ease-linear cursor-pointer"
      id={id}
    >
      <h4 className="absolute z-20 bottom-5 left-5 uppercase font-bold">
        {title}
      </h4>
      <Image
        width={320}
        height={450}
        src={poster}
        alt={title}
        className="absolute z-10 left-0 top-0 object-cover w-full h-full hover:opacity-[0.5] duration-75 ease-linear"
      />
    </div>
  );
};

export { MovieCard };
