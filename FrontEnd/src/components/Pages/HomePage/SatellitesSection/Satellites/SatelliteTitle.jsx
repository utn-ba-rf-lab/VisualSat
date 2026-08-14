import React from 'react'
import './SatelliteTitle.css'

const SatelliteTitle = ({ title, subtitle }) => {
    console.log("title:", title)

    return (
    <div className='satelliteTitle'>
      <h2 className='title text'>{title}</h2>
      <h3 className='text'>{subtitle}</h3>
    </div>
  )
}

export default SatelliteTitle