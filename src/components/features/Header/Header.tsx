import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button, Logo } from "@/components";

const Header: FC = () => {
  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50 bg-black">
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
            Movies
          </Link>
          <Button href="/auth">
            <span className="block w-fit whitespace-nowrap">Sign-in</span>{" "}
            <FontAwesomeIcon
              icon={faGoogle}
              className="text-base w-[20px] h-[20px]"
            />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export { Header };
