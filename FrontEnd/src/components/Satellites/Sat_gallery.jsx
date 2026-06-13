import React from 'react'
import './Sat_gallery.css'
import Swiper_component from './Swiper/Swiper_component'

const Sat_gallery = ({images}) => {
  return (
    <div className='sat_gallery'>
      <h4 className='text'>Last images</h4>

      <Swiper_component images={images}/>

      <h4 className='text'>view all</h4>
    </div>
  )
}

export default Sat_gallery