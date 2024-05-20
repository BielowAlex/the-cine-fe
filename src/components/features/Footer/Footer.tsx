import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center bg-black mt-[50px]">
      <div className="container flex flex-col justify-center items-center p-[50px] text-md">
        <p>
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} className="text-amber-500" />
        </p>
        <Link href="https://alex-bielow.vercel.app/" target="_blank">
          by AlexBielow
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
