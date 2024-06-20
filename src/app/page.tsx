import { Button, Hero } from "@/components";
import TrendingMovies from "@/components/features/TrendingMovies/TrendingMovies";
import React, { FC } from "react";

const Home: FC = async () => {
  return (
    <main className="flex flex-col items-center justify-between gap-10">
      <Hero />
      <TrendingMovies />
      <Button className="text-2xl" href="/trending">
        Show more
      </Button>
    </main>
  );
};

export default Home;
