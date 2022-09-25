import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../Assests/slider/slider1.jpg';
import slider2 from '../../Assests/slider/slider2.jpg';
import slider3 from '../../Assests/slider/slider3.jpg';
import slider4 from '../../Assests/slider/slider4.jpg';
import slider5 from '../../Assests/slider/slider5.jpg';
import slider6 from '../../Assests/slider/slider6.jpg';
import slider7 from '../../Assests/slider/slider7.jpg';
import slider8 from '../../Assests/slider/slider8.jpg';
import slider9 from '../../Assests/slider/slider9.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Gallary = () => {
  return (
    <div>
      <h1 className=' text-center text-5xl galdenoFont font-bold my-8'>Gallery</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className=' rounded-xl' src={slider1} alt='slider1'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider2} alt='slider2'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider3} alt='slider3'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider4} alt='slider4'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider5} alt='slider5'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider6} alt='slider6'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider7} alt='slider7'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider8} alt='slider8'></img></SwiperSlide>
        <SwiperSlide><img className=' rounded-xl' src={slider9} alt='slider9'></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallary;