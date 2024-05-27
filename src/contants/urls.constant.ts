export const movieBaseUrl = process.env.NEXT_PUBLIC_APP_TMDB_URL;

export const movieUrls = {
  trending: "/trending/movie/day",
  getById: (id: string) => `/movie/${id}?append_to_response=videos`,
  topRated: "/movie/top_rated",
  getSimilar: (id: string) => `/movie/${id}/similar`
};
