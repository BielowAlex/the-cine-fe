"use client";
import { create } from "zustand";
import { Genre, Movie, Pagination } from "@/types";

export interface IMovieStoreState {
  movies: {
    trendingMovies: Movie[];
    savedMovies: Movie[];
    movieByGenre: Pagination<Movie[]>;
    currentGenre: Genre;
  };
  // eslint-disable-next-line no-unused-vars
  updateTrendingList: (newTrendingMovie: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  updateSavedList: (savedMovies: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  saveMovie: (movie: Movie) => void;
  // eslint-disable-next-line no-unused-vars
  updateMovieByGenre: (movie: Pagination<Movie[]>) => void;
  // eslint-disable-next-line no-unused-vars
  updateCurrentGenre: (genre: Genre) => void;
}

export const movieStore = create<IMovieStoreState>((set) => ({
  movies: {
    trendingMovies: [],
    savedMovies: [],
    movieByGenre: { total_pages: 1, total_results: 0, page: 1, results: [] },
    currentGenre: {
      id: 28,
      name: "Action"
    }
  },
  updateTrendingList: (newTrendingMovie: Movie[]) =>
    set((state: IMovieStoreState) => ({
      movies: { ...state.movies, trendingMovies: newTrendingMovie }
    })),
  updateSavedList: (savedMovies: Movie[]) =>
    set((state: IMovieStoreState) => ({
      movies: { ...state.movies, savedMovies: savedMovies }
    })),
  saveMovie: (movie: Movie) =>
    set((state: IMovieStoreState) => ({
      movies: {
        ...state.movies,
        savedMovies: [...state.movies.savedMovies, movie]
      }
    })),
  updateMovieByGenre: (movieByGenre: Pagination<Movie[]>) =>
    set((state: IMovieStoreState) => ({
      movies: {
        ...state.movies,
        movieByGenre
      }
    })),
  updateCurrentGenre: (currentGenre: Genre) =>
    set((state: IMovieStoreState) => ({
      movies: {
        ...state.movies,
        currentGenre
      }
    }))
}));
