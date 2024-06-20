"use client";
import React, { FC } from "react";
import { MoviesService } from "@/utils";
import { Movie } from "@/types";
import { MovieCard } from "@/components";

interface IProps {
  movieList: Movie[];
}

const MovieList: FC<IProps> = ({ movieList }) => {
  return (
    <div className="flex p-2 w-full flex-wrap  justify-center content-center gap-5 m-[0, auto]">
      {movieList?.length > 0 &&
        movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={MoviesService.getImage(movie.poster_path)}
          />
        ))}
    </div>
  );
};

export { MovieList };
