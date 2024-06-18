"use client";
import { Genres, MovieList } from "@/components";
import { movieStore } from "@/store";
import { Genre, Movie } from "@/types";
import { useEffect } from "react";

const Page = () => {
  const movieList: Movie[] = movieStore((state) => state.movies.movieByGenre);
  const currentGenre: Genre = movieStore((state) => state.movies.currentGenre);
  const updateMovieList = movieStore((state) => state.updateMovieByGenre);

  useEffect(() => {}, [currentGenre]);
  return (
    <main>
      <div className="container flex flex-col items-center justify-center gap-10 mt-[100px]">
        <Genres />
        <MovieList movieList={movieList} />
      </div>
    </main>
  );
};

export default Page;
