import React from 'react'
import SatelliteTitle from '../../Satellites/SatelliteTitle'
import Sat_gallery from '../../Satellites/Sat_gallery'
import { satellites } from '../../../data/satellites'
import './SatellitesPage.css'

const SatellitesPage = () => {
  return (
    <div className='SatellitesPage'>
      {
        satellites.map(satellite =>(
          <SatelliteTitle
            key={satellite.id}
            title={satellite.title}
            subtitle={satellite.subtitle}
          />
        ))
      }

      {
        satellites.map(satellite =>(
          <Sat_gallery
            key={satellite.id}
            images={satellite.images}
          />
        ))
      }
    </div>
  )
}

export default SatellitesPage