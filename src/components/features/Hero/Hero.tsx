import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";

const Hero: FC = () => {
  return (
    <section className="flex justify-center items-center relative w-full">
      <div className="absolute left-0 top-0 w-full h-[660px]">
        <Image
          width={1480}
          height={660}
          src="/images/hero.jpg"
          alt="hero"
          className=" object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="bg-black absolute top-0 left-0 z-[5] w-full h-full opacity-[0.5]" />

      <div className="container  w-full flex justify-center items-center h-[660px] overflow-hidden">
        <div className="z-10 w-full h-full flex relative flex-col justify-center items-center gap-5">
          <h2 className="text-5xl font-extrabold z-10 w-1/2 text-center">
            Find and Save movies to your collection!
          </h2>
          <Button href="/movies" className="z-10 font-bold border-2 text-2xl">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
