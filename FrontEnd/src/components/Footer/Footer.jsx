import React from 'react'
import './Footer.css'
import { satellites } from '../../data/satellites'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerTitle'>
            <h5>VisualSat</h5>
            <span>Visualización de imágenes satelitales.</span>
        </div>
        <div className='footerContent'>
            <div className='footerlinks'>
                <p>Inicio</p>
                <p>Satelites</p>
                <ul>
                    {
                        satellites.map(satellite => (
                            <li>{satellite.title}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='footerOficialData'>
                <p>Nosotros</p>
                <span>©2026 VisualSat</span>
            </div>
        </div>
    </div>
  )
}

export default Footer