"use client";
import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import cn from "classnames";

interface Props {
  pageCount: number;
  initialPage: number;
  setPage: (page: number) => void;
  className?: string;
}

const Paginate: FC<Props> = ({
  pageCount,
  setPage,
  initialPage,
  className
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      initialPage={+initialPage - 1}
      onPageChange={({ selected }) => setPage(++selected)}
      className={cn(
        "flex w-full  justify-center items-center gap-1 text-[12px] sm:gap-4 sm:text-base",
        className
      )}
      activeLinkClassName="border border-amber-500 bg-amber-500 block"
      pageLinkClassName="border border-amber-500 p-1 sm:p-2 rounded-lg block"
      nextLinkClassName="border border-amber-500 p-1 sm:p-2 rounded-lg block"
      previousClassName="border border-amber-500 p-1 sm:p-2 rounded-lg block"
    />
  );
};

export { Paginate };
