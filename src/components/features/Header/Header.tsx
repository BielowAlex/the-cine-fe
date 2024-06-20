import React, { FC } from "react";
import Link from "next/link";
import { Logo } from "@/components";

const Header: FC = () => {
  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-[9999] bg-[rgb(0,0,0,0.5)]">
      <div className="container justify-between p-5 flex items-center">
        <Logo />
        <nav className="flex items-center justify-center gap-5">
          <Link
            href="/genres"
            className="text-white text-base  hover:opacity-[0.5] ease-linear duration-75"
          >
            Genres
          </Link>
          <Link
            href="/movies"
            className="text-white text-base  hover:opacity-[0.5] ease-linear duration-75"
          >
            Search
          </Link>
          <Link
            href="/trending"
            className="text-white text-base  hover:opacity-[0.5] ease-linear duration-75"
          >
            Trending
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { Header };
