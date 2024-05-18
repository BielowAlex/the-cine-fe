import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

const Logo: FC = () => {
  return (
    <Link
      href="/"
      className="text-amber-500 font-extrabold uppercase flex justify-center items-center gap-2"
    >
      <span className="whitespace-nowrap">The Cine</span>{" "}
      <FontAwesomeIcon icon={faTicket} className="w-[20px] h-[20px]" />
    </Link>
  );
};

export { Logo };
