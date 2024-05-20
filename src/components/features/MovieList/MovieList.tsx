import React, { FC } from "react";
import { MoviesService } from "@/utils";
import { Movie } from "@/types";
import { MovieCard } from "@/components";

interface IProps {
  movieList: Movie[];
}

const MovieList: FC<IProps> = ({ movieList }) => {
  return (
    <div className="flex p-2 flex-wrap justify-around content-center gap-10">
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
