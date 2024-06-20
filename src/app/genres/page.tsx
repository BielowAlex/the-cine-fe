"use client";
import { Genres, Loader, MovieList, Paginate } from "@/components";
import { movieStore } from "@/store";
import { Genre, Movie, Pagination } from "@/types";
import React, { useEffect, useState } from "react";
import { MoviesService } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const GenresPage = () => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const movieList: Pagination<Movie[]> = movieStore(
    (state) => state.movies.movieByGenre
  );
  const currentGenre: Genre = movieStore((state) => state.movies.currentGenre);
  const updateMovieList = movieStore((state) => state.updateMovieByGenre);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPage = searchParams.get("page") || 1;

  useEffect(() => {
    setIsLoading(() => true);
    MoviesService.getByGenre(currentGenre.id, page)
      .then(({ data }) => {
        router.push(`${pathname}?page=${page}&genreId=${currentGenre.id}`);

        updateMovieList(data);
      })
      .finally(() => setIsLoading(() => false));
  }, [currentGenre, page, router, pathname, updateMovieList]);

  useEffect(() => {
    setPage(+initialPage);
  }, [initialPage]);

  return (
    <main className="pt-[100px] w-full flex justify-center bg-black">
      <div className="container flex flex-col items-center justify-center gap-10 ">
        <Genres />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <MovieList movieList={movieList.results} />
            <Paginate
              initialPage={+initialPage}
              pageCount={500}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default GenresPage;
