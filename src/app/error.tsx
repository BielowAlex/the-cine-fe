"use client";

import { Button } from "@/components";

const Error = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error);
  const errorMessage = error.message || error.digest;

  return (
    <div className=" h-dvh w-full flex justify-center items-center flex-col gap-5">
      <h2 className="text-3xl">Something went wrong!</h2>
      {errorMessage && <p className="text-3xl">Message: {errorMessage}</p>}
      <div className="flex gap-10 items-center ">
        <Button handleClick={() => reset()}>Try again</Button>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
};

export default Error;
