import React from 'react'
import titulo from '../../../assets/VisualSat_Texto.png'
import './HeroSection.css'
import BottomBar from './BottomBar/BottomBar'

const HeroSection = () => {
  return (
    <div className='heroSection'>
        <img className='titulo' src={titulo} alt="VisualSat" height={75} />
        <BottomBar/>
    </div>
  )
}

export default HeroSection