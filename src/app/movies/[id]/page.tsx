"use client";
import React from "react";
import { useParams } from "next/navigation";

const MoviePage = () => {
  const params = useParams();
  return (
    <div className="mt-[100px]">
      <h2 className="font-white">id: {params.id}</h2>
    </div>
  );
};

export default MoviePage;
