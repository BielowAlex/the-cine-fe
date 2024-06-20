import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "@/components";
import { MoviesService } from "@/utils";
import { Movie } from "@/types";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

interface IProps {
  title: string;
  movieList: Movie[];
}

const MovieSlider: FC<IProps> = ({ title, movieList }) => {
  return (
    movieList?.length > 0 && (
      <div className="w-full flex flex-col jtustify-center items-start gap-5 relative max-h-[500px] h-full overflow-hidden select-none">
        <h2 className=" font-extrabold text-xl md:text-2xl lg:text-3xl">
          {title}:
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          navigation={true}
          centeredSlides={false}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20
            }
          }}
          className="w-full h-full"
        >
          {movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster={MoviesService.getImage(movie.poster_path)}
                className="!w-[180px] !max-h-[300px] sm:!w-[220px] sm:!h-[350px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export { MovieSlider };
