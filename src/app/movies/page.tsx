"use client";
import React, { memo, useEffect, useState } from "react";
import { Button, Loader, MovieList } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSadTear,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { MoviesService } from "@/utils";
import { Movie, Pagination as PaginationType } from "@/types";
import { IMovieStoreState, movieStore } from "@/store";
import ReactPaginate from "react-paginate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// eslint-disable-next-line react/display-name
const MoviesPage = memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.get("page") || 1);
  const initialPage = searchParams.get("page") || 1;
  const initialQuery = searchParams.get("search") ?? "";

  const [movieList, setMovieList] = useState<PaginationType<Movie[]>>({
    page: 1,
    total_pages: 1,
    total_results: 0,
    results: []
  });
  const [search, setSearch] = useState<string>(initialQuery);
  const [page, setPage] = useState<number>(+initialPage);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(search, initialQuery);

  const trendingMovies = movieStore(
    (state: IMovieStoreState) => state.movies.trendingMovies
  );
  const updateTrendingList = movieStore(
    (state: IMovieStoreState) => state.updateTrendingList
  );

  useEffect(() => {
    setIsLoading(() => true);
    MoviesService.searchMovies(search, page)
      .then(({ data }) => {
        router.push(`${pathname}?page=${page}&search=${search}`);
        setMovieList(data);
      })
      .finally(() => setIsLoading(() => false));
  }, [search, page, router, pathname]);

  useEffect(() => {
    if (trendingMovies.total_results === 0) {
      setIsLoading(() => true);

      MoviesService.getTrending()
        .then(({ data }) => {
          updateTrendingList(data);
        })
        .finally(() => setIsLoading(() => false));
    }
  }, [trendingMovies.total_results, updateTrendingList]);

  useEffect(() => {
    setPage(+initialPage);
    setSearch(initialQuery);
  }, [initialPage, initialQuery]);

  return (
    <main className="pt-[100px] w-full flex justify-center bg-black">
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <h2>Search</h2>
          <div className="flex gap-3">
            <input
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="!bg-black text-amber-500 border p-2 border-amber-500 rounded-md outline-0"
            />
            <Button className="p-2 w-[45px]">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-xl block"
              />
            </Button>
          </div>
        </div>
        {movieList.total_results > 0 ? (
          isLoading ? (
            <Loader />
          ) : (
            <>
              <MovieList movieList={movieList.results} />
              <ReactPaginate
                pageCount={500}
                initialPage={+initialPage - 1}
                onPageChange={({ selected }) => setPage(++selected)}
                className="flex w-full justify-center items-center gap-5"
                activeLinkClassName="border border-amber-500 bg-amber-500 block"
                pageLinkClassName="border border-amber-500 p-2 rounded-lg block"
                nextLinkClassName="border border-amber-500 p-2 rounded-lg block"
                previousClassName="border border-amber-500 p-2 rounded-lg block"
              />
            </>
          )
        ) : search ? (
          <div className="flex p-[250px] justify-center items-center">
            <span className="text-4xl">
              No results found <FontAwesomeIcon icon={faFaceSadTear} />
            </span>
          </div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex  justify-center items-center">
              <span className="text-4xl">Type something in the search bar</span>
            </div>
            <MovieList movieList={trendingMovies.results} />
          </>
        )}
      </div>
    </main>
  );
});

export default MoviesPage;
