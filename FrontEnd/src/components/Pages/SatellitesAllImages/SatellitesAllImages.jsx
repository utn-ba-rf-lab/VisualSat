import React from 'react'
import Pasadas from './Pasadas/Pasadas'
import SatGallery from './SatGallery/SatGallery'
import { useParams } from 'react-router-dom';
import './SatellitesAllImages.css'
import { satellites } from '../../../data/satellites';

const SatellitesAllImages = () => {

  const { satellitename } = useParams();

  const satData = satellites.find((sat) => sat.title == satellitename)

  return (
    <div className='satellitesAllImages'>
        
        <h3 className='text'>{satellitename}</h3>//Titulo
        
        <Pasadas/>//Pasadas
        
        <SatGallery images={satData.images}/>//Imagenes
    </div>
  )
}

export default SatellitesAllImages