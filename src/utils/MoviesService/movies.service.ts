import axios, { AxiosInstance } from "axios";
import { AxiosRes } from "@/types/common.types";
import { Genre, Movie, MovieFull, Pagination } from "@/types/movies.types";
import { movieBaseUrl, movieUrls } from "@/constants";

export const MovieApi: AxiosInstance = axios.create({ baseURL: movieBaseUrl });

MovieApi.interceptors.request.use(
  (config) => {
    const token = process.env.NEXT_PUBLIC_APP_TMDB_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const MoviesService = {
  getTrending: (): AxiosRes<Pagination<Movie[]>> =>
    MovieApi.get(movieUrls.trending),
  getImage: (id: string): string =>
    `${process.env.NEXT_PUBLIC_APP_TMDB_IMAGES_URL}${id}`,
  getById: (id: string): AxiosRes<MovieFull> =>
    MovieApi.get(movieUrls.getById(id)),
  getSimilarMovie: (id: string) => MovieApi.get(movieUrls.getSimilar(id)),
  searchMovies: (query: string, page: number) =>
    MovieApi.get(movieUrls.searchMovie, {
      params: {
        query,
        page
      }
    }),
  getGenreList: (): AxiosRes<{ genres: Genre[] }> =>
    MovieApi.get(movieUrls.genreList),
  getByGenre: (genreId: number | string): AxiosRes<Pagination<Movie[]>> =>
    MovieApi.get(movieUrls.getByGenre(genreId))
};
