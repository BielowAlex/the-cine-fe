import React, { FC } from "react";
import { Movie, Pagination } from "@/types";
import { MoviesService } from "@/utils";
import { MovieList } from "@/components";

const getTrendingMovieList = async (): Promise<Pagination<Movie[]>> => {
  try {
    const res = await MoviesService.getTrending();

    return res.data;
  } catch (e) {
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0
    };
  }
};
const TrendingMovies: FC = async () => {
  const movieList = await getTrendingMovieList();
  return (
    <section className="w-full flex justify-center bg-black">
      <div className="container flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <span className="text-sm text-amber-500">ACCORDING TO IMDb</span>
          <h3 className="text-4xl font-bold">Trending movies</h3>
        </div>
        {movieList && movieList.total_results > 0 && (
          <MovieList movieList={movieList.results} />
        )}
      </div>
    </section>
  );
};

export default TrendingMovies;
