export const movieBaseUrl = process.env.APP_TMDB_URL;

export const movieUrls = {
  trending: "/trending/movie/day",
  getById: (id: string) => `/movie/${id}`,
  topRated: "/movie/top_rated"
};
