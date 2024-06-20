"use client";
import React, { FC, useEffect, useState } from "react";
import { Loader, MovieList } from "@/components";
import { movieStore } from "@/store";
import ReactPaginate from "react-paginate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MoviesService } from "@/utils";

const TrendingPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const trendingMovies = movieStore((state) => state.movies.trendingMovies);
  const updateTrendingList = movieStore((state) => state.updateTrendingList);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPage = searchParams.get("page") || 1;

  useEffect(() => {
    setIsLoading(() => true);
    MoviesService.getTrending(page)
      .then(({ data }) => {
        router.push(`${pathname}?page=${page}`);

        updateTrendingList(data);
      })
      .finally(() => setIsLoading(() => false));
  }, [page, router, pathname, updateTrendingList]);

  useEffect(() => {
    setPage(() => +initialPage);
  }, [initialPage]);

  return (
    <main className="pt-[100px] w-full flex justify-center bg-black">
      <div className="container flex flex-col items-center justify-center gap-10 ">
        <h3 className="text-4xl font-bold">Trending movies</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <MovieList movieList={trendingMovies.results} />
            <ReactPaginate
              pageCount={500}
              initialPage={page - 1}
              onPageChange={({ selected }) => setPage(++selected)}
              className="flex w-full justify-center items-center gap-5"
              activeLinkClassName="border border-amber-500 bg-amber-500 block"
              pageLinkClassName="border border-amber-500 p-2 rounded-lg block"
              nextLinkClassName="border border-amber-500 p-2 rounded-lg block"
              previousClassName="border border-amber-500 p-2 rounded-lg block"
            />
          </>
        )}
      </div>
    </main>
  );
};

export default TrendingPage;
