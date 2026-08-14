import React from 'react'
import SatelliteTitle from './Satellites/SatelliteTitle.jsx'
import Sat_gallery from './Satellites/SatCarousel.jsx'
import { satellites } from '../../../../data/satellites.js'
import './SatellitesPage.css'
import SatelliteSection from "./Satellites/SatelliteSection.jsx";

const SatellitesPage = () => {
  return (
    <div className='SatellitesPage'>
      {
        satellites.map(satellite => (
          <SatelliteSection satellite={satellite} key={satellite.id}/>
        ))
      }
    </div>
  )
}

export default SatellitesPage