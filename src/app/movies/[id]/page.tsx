"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { convertMinutesToHoursMinutes, MoviesService } from "@/utils";
import { Movie, MovieFull, Pagination, Video } from "@/types";
import { LikeButton } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FormatVoteNumber } from "@/utils/FormatVoteNumber";
import Image from "next/image";
import YouTube from "react-youtube";
import { MovieSlider } from "@/components/features/MovieSlider";

const MoviePage = () => {
  const [movie, setMovie] = useState<MovieFull>();
  const [similarMovieList, setSimilarMovieList] = useState<Pagination<Movie[]>>(
    {
      page: 1,
      total_pages: 1,
      total_results: 0,
      results: []
    }
  );
  const [currentTrailer, setCurrentTrailer] = useState<Video>();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const params = useParams();

  useEffect(() => {
    if (typeof params.id === "string") {
      MoviesService.getById(params.id).then(({ data }) => {
        setMovie(data);

        console.log(data);

        setCurrentTrailer(
          data?.videos.results?.find((el) => el.type === "Trailer") ||
            data?.videos.results[0]
        );
      });
    }
  }, [params.id]);

  useEffect(() => {
    if (movie && typeof params.id === "string") {
      MoviesService.getSimilarMovie(params.id).then(({ data }) => {
        setSimilarMovieList(data);
      });
    }
  }, [movie, params.id]);
  return (
    movie && (
      <section className="mt-[100px] w-full flex justify-center bg-black">
        <div className="container relative flex flex-col justify-center items-center gap-10 p-5">
          <div className="flex w-full justify-between items-center border-b pb-5">
            <div className="flex flex-col items-start gap-1">
              <h2 className=" font-extrabold text-4xl">{movie?.title}</h2>
              <span className="text-[12px] text-[rgb(128,128,128,1)]">
                {new Date(movie?.release_date).getFullYear()} -{" "}
                {convertMinutesToHoursMinutes(movie.runtime)}
              </span>
            </div>
            <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-[12px] text-[rgb(128,128,128,1)]">
                  IMDb RATING
                </span>
                <div className="flex justify-center items-center gap-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[25px] text-amber-500"
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="flex items-center gap-1">
                      <span className="text-[14px]">
                        {movie.vote_average.toFixed(1)}
                      </span>
                      <span className="text-[12px] text-[rgb(128,128,128,1)]">
                        / 10
                      </span>
                    </span>
                    <span className="text-[12px] text-[rgb(128,128,128,1)]">
                      {FormatVoteNumber(movie.vote_count)}
                    </span>
                  </div>
                </div>
              </div>
              <LikeButton
                isSaved={isSaved}
                handleClick={() => setIsSaved((prev) => !prev)}
              />
            </div>
          </div>
          <div className=" w-full flex justify-between items-start gap-10">
            <div className="relative min-w-[320px] h-[450px] overflow-hidden">
              <Image
                width={320}
                height={450}
                src={MoviesService.getImage(
                  movie.belongs_to_collection?.poster_path || movie.poster_path
                )}
                alt={movie.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex justify-center items-center w-full">
                {currentTrailer && <YouTube videoId={currentTrailer.key} />}
              </div>
              <ul className="flex gap-2 flex-wrap">
                {movie.genres.map((genre) => (
                  <li
                    key={genre.id}
                    className="border cursor-pointer p-1 rounded-xl border-[rgb(128,128,128)] font-light"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
              <p>{movie.overview}</p>
              <ul className="flex flex-col justify-start gap-5 mt-5 w-full pb-5">
                <li>
                  Budget:{" "}
                  <span className="text-[rgb(128,128,128,1)]">
                    {movie.budget}$
                  </span>
                </li>
                {!!movie.production_countries.length && (
                  <li>
                    Country:{" "}
                    <span className="text-[rgb(128,128,128,1)]">
                      {movie.production_countries[0].name}
                    </span>
                  </li>
                )}
                <li>
                  Status:{" "}
                  <span className="text-[rgb(128,128,128,1)]">
                    {movie.status}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <MovieSlider
            title={"Recommendation"}
            movieList={similarMovieList.results}
          />
        </div>
      </section>
    )
  );
};

export default MoviePage;
