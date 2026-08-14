import React from 'react';
import SatelliteTitle from "./SatelliteTitle.jsx";
import Sat_gallery from "./SatCarousel.jsx";
import './SatelliteSection.css'
import { useNavigate } from 'react-router-dom';

const SatelliteSection = ({satellite}) => {
    const navigate = useNavigate();

    return (
        <div className='satelliteSection'>
            <SatelliteTitle key={satellite.id} title={satellite.title} subtitle={satellite.subtitle}/>
            <Sat_gallery key={satellite.id} images={satellite.images}/>
            <button className='bottomSat' key={satellite.id} onClick={() => navigate(`/sat/${satellite.title}`)}>View All</button>
        </div>
    );
};

export default SatelliteSection;