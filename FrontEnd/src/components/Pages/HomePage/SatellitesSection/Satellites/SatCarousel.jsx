import React from 'react'
import './SatCarousel.css'
import Swiper_component from './Swiper/Swiper_component'
import { Navigate } from 'react-router-dom'

const Sat_gallery = ({images}) => {
  return (
    <div className='sat_gallery'>
      <h4 className='images_cointaner_title text'>Last images</h4>

      <Swiper_component images={images}/>
    </div>
  )
}

export default Sat_gallery