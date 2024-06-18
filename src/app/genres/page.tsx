"use client";
import { Genres, MovieList } from "@/components";
import { movieStore } from "@/store";
import { Genre, Movie, Pagination } from "@/types";
import React, { useEffect, useState } from "react";
import { MoviesService } from "@/utils";
import ReactPaginate from "react-paginate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const [page, setPage] = useState<number>(1);
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
    console.log("render", movieList);

    MoviesService.getByGenre(currentGenre.id, page).then(({ data }) => {
      router.push(`${pathname}?page=${page}&genreId=${currentGenre.id}`);

      updateMovieList(data);
    });
  }, [currentGenre, page, router, pathname, movieList, updateMovieList]);

  useEffect(() => {
    setPage(+initialPage);
  }, [initialPage]);

  return (
    <main className="pt-[100px] w-full flex justify-center bg-black">
      <div className="container flex flex-col items-center justify-center gap-10 ">
        <Genres />
        <MovieList movieList={movieList.results} />
        <ReactPaginate
          pageCount={movieList.total_pages}
          initialPage={+1 - 1}
          onPageChange={({ selected }) => setPage(++selected)}
          className="flex w-full justify-center items-center gap-5"
          activeLinkClassName="border border-amber-500 bg-amber-500 block"
          pageLinkClassName="border border-amber-500 p-2 rounded-lg block"
          nextLinkClassName="border border-amber-500 p-2 rounded-lg block"
          previousClassName="border border-amber-500 p-2 rounded-lg block"
        />
      </div>
    </main>
  );
};

export default Page;
