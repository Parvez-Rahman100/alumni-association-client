import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../Assests/slider1.png';
import slider2 from '../../Assests/slider2.png';
import slider3 from '../../Assests/slider3.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Gallary = () => {
  return (
    <div>
      <h1 className=' text-center text-5xl galdenoFont font-bold my-8'>Gallary</h1>
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
        <SwiperSlide><img src={slider1} alt='slider1'></img></SwiperSlide>
        <SwiperSlide><img src={slider2} alt='slider2'></img></SwiperSlide>
        <SwiperSlide><img src={slider3} alt='slider3'></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallary;