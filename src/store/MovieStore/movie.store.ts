"use client";
import { create } from "zustand";
import { Movie } from "@/types";

export interface IMovieStoreState {
  movies: {
    trendingMovies: Movie[];
    savedMovies: Movie[];
  };
  // eslint-disable-next-line no-unused-vars
  updateTrendingList: (newTrendingMovie: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  updateSavedList: (savedMovies: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  saveMovie: (movie: Movie) => void;
}

export const movieStore = create<IMovieStoreState>((set) => ({
  movies: {
    trendingMovies: [],
    savedMovies: []
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
    }))
}));
