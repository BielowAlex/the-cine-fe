import axios, { AxiosInstance } from "axios";
import { movieBaseUrl, movieUrls } from "@/contants";
import { AxiosRes } from "@/types/common.types";
import { Movie, Pagination } from "@/types/movies.types";

export const MovieApi: AxiosInstance = axios.create({ baseURL: movieBaseUrl });

MovieApi.interceptors.request.use(
  (config) => {
    const token = process.env.APP_TMDB_TOKEN;
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
  getImage: (id: string): string => `${process.env.APP_TMDB_IMAGES_URL}${id}`
};