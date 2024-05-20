import { Hero } from "@/components";
import TrendingMovies from "@/components/features/TrendingMovies/TrendingMovies";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-10">
      <Hero />
      <TrendingMovies />
    </main>
  );
};

export default Home;
