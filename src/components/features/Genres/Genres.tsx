"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Genre } from "@/types";
import { MoviesService } from "@/utils";
import { movieStore } from "@/store";

const Genres: FC = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);

  const currentGenre: Genre = movieStore((state) => state.movies.currentGenre);
  const updateCurrentGenre = movieStore((state) => state.updateCurrentGenre);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const genreFromList = genreList.find((el) => el.id === +e.target.value);

    if (genreFromList) {
      updateCurrentGenre(genreFromList);
    }
  };

  useEffect(() => {
    MoviesService.getGenreList().then(({ data }) => {
      setGenreList(data.genres);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <label htmlFor="genre-list" className="text-xl">
        Genre list
      </label>
      <select
        value={currentGenre.id}
        name="genre"
        id="genre-list"
        className="text-xl bg-black text-amber-500 border-amber-500 border p-1 rounded-md"
        onChange={(e) => handleChange(e)}
      >
        {genreList.length ? (
          genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))
        ) : (
          <option value={currentGenre.id}>{currentGenre.name}</option>
        )}
      </select>
    </div>
  );
};

export { Genres };
