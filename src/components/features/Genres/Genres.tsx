"use client";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState
} from "react";
import { Genre } from "@/types";
import { MoviesService } from "@/utils";
import { movieStore } from "@/store";
import { useSearchParams } from "next/navigation";

const Genres: FC = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const currentGenre: Genre = movieStore((state) => state.movies.currentGenre);
  const updateCurrentGenre = movieStore((state) => state.updateCurrentGenre);

  const searchParams = useSearchParams();
  const initialGenreId: string | number = searchParams.get("genreId") || 28;

  const updateGenre = useCallback(
    (id: string | number) => {
      const genreFromList = genreList.find((el) => el.id === +id);

      if (genreFromList) {
        updateCurrentGenre(genreFromList);
      }
    },
    [genreList, updateCurrentGenre]
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateGenre(e.target.value);
  };

  useEffect(() => {
    MoviesService.getGenreList().then(({ data }) => {
      setGenreList(data.genres);
    });
  }, []);

  useEffect(() => {
    updateGenre(initialGenreId);
  }, [initialGenreId, updateGenre]);

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
