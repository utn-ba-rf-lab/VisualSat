import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper_component.css';

const Swiper_component = ({images}) => {
  return (
    <Swiper
        className='swiper_component'
        spaceBetween={20}
        slidesPerView={3}
        >
          {
            images.map(img =>(
              <SwiperSlide key={img.id}>
                  <img className='sat_img' src={img.img} alt='img'/>
              </SwiperSlide>
            ))
          }
        
    </Swiper>
  )
}

export default Swiper_component