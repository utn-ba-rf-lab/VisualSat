import React, { useEffect, useState } from 'react'

import axios from "axios";
import './PasadasPage.css'
import { usePasadas } from '../../Context/PasadasContext';

const PasadasPage = () => {
  const { pasadas, loading, error } = usePasadas();
  const [pasadasCURD, setPasadas] = useState([]);

  return (
    <div className="PasadasPage">
      <div className='PasadasPageCard'>
        <div className='pasadasPageTitle'>
            <h4>Pasadas</h4>
        </div>
        <div className='pasadasPageDataContainer'>
            <div className='pasadasData'>
                <h5 className='text'>Próximas pasadas</h5>
	  				<div className='eachPasadaContainer'>
	  				{pasadas.map(pasada => (
                        <p key={pasada.sate_name + pasada.aos}> {pasada.sate_name}: {pasada.aos} - Inclinación: {pasada.elev_max}</p>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PasadasPage
