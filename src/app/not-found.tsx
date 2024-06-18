import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components";

export default async function NotFound() {
  return (
    <div className="h-dvh w-full flex justify-center items-center flex-col gap-5">
      <h2 className="text-4xl">
        Oopsi something <span className="text-amber-500">(0_o)</span>
      </h2>

      <p
        className="flex gap-2 align-middle items-center text-2xl"
        data-testid="message"
      >
        <span className="min-w-fit">Page not found</span>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="w-[20px] h-[20px] text-amber-500"
        />
      </p>
      <Button href="/">Return Home</Button>
    </div>
  );
}
