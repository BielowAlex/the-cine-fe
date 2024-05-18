import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  return (
    <header className="w-full flex justify-center">
      <div className="container justify-between p-5 flex items-center">
        <Link
          href="/"
          className="text-amber-500 font-extrabold uppercase flex justify-center items-center gap-2"
        >
          <span className="whitespace-nowrap">The Cine</span>{" "}
          <FontAwesomeIcon icon={faTicket} className="w-[20px] h-[20px]" />
        </Link>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="/genres"
            className="text-white text-base hover:text-amber-500 duration-75 ease-linear"
          >
            Genres
          </Link>

          <Link
            href="/movies"
            className="text-white text-base hover:text-amber-500 duration-75 ease-linear"
          >
            Movies
          </Link>
          <Link
            href="/auth"
            className="text-white hover:text-amber-500 duration-75 ease-linear flex w-fit gap-1 justify-between items-center text-base"
          >
            <span className="block w-fit whitespace-nowrap">Sign-in</span>{" "}
            <FontAwesomeIcon
              icon={faGoogle}
              className="text-base w-[20px] h-[20px]"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
