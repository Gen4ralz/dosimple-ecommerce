import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Slider = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="slide">
        <div className="slide-img bg-[url('../public/images/slider/image1.jpg')]"></div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide-img bg-[url('../public/images/slider/image2.jpg')]"></div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide-img bg-[url('../public/images/slider/image3.jpg')]"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
