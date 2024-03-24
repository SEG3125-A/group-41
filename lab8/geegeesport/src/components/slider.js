import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "tailwindcss/base";
// import "tailwindcss/components";
// import "tailwindcss/utilities";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "../css/gameslider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function GameSlider(prop) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  console.log(prop);
  return (
    <div className="gameWindow   select-none w-full ">
      <div className="text-4xl pb-10 font-bold text-red-800">
        <h1>
          {prop.prop == "french" && "A venir"}
          {prop.prop == "english" && "Upcoming"}
        </h1>
      </div>
      <Swiper
        // style={{
        //   "--swiper-pagination-color": "#FFBA08",
        //   "--swiper-pagination-bullet-inactive-color": "#999999",
        //   "--swiper-pagination-bullet-inactive-opacity": "1",
        //   "--swiper-pagination-bullet-size": "16px",
        //   "--swiper-pagination-bullet-horizontal-gap": "6px",
        // }}
        breakpoints={{
          100: {
            // width: 576,
            slidesPerView: 2,
          },
          700: {
            // width: 768,
            slidesPerView: 7,
          },
        }}
        spaceBetween={60}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        modules={[Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="images/swimg.jpg" className="imageGameSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/image1.jpeg" className="imageGameSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/volleyball.jpg" className="imageGameSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="images/scoccer.jpg" className="imageGameSlide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/football.webp" className="imageGameSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/tennis.jpg" className="imageGameSlide" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img src="images/baseball.webp" className="imageGameSlide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/golf.jpeg" className="imageGameSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/image3.jpg" className="imageGameSlide" />
        </SwiperSlide>
        <button className="arrow-left arrow">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/chevron-left.png"
            alt="chevron-left"
          />
        </button>
        <button className="arrow-right arrow">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/chevron-right.png"
            alt="chevron-right"
          />
        </button>
      </Swiper>
    </div>
  );
}
