"use client";
import { create } from "zustand";
import { Genre, Movie } from "@/types";

export interface IMovieStoreState {
  movies: {
    trendingMovies: Movie[];
    savedMovies: Movie[];
    movieByGenre: Movie[];
    currentGenre: Genre;
  };
  // eslint-disable-next-line no-unused-vars
  updateTrendingList: (newTrendingMovie: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  updateSavedList: (savedMovies: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  saveMovie: (movie: Movie) => void;
  // eslint-disable-next-line no-unused-vars
  updateMovieByGenre: (movie: Movie[]) => void;
  // eslint-disable-next-line no-unused-vars
  updateCurrentGenre: (genre: Genre) => void;
}

export const movieStore = create<IMovieStoreState>((set) => ({
  movies: {
    trendingMovies: [],
    savedMovies: [],
    movieByGenre: [],
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
  updateMovieByGenre: (movieByGenre: Movie[]) =>
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
