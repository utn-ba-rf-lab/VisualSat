import React from 'react'
import Header from '../../Home/Header/Header'
import HeroSection from '../../Home/HeroSection/HeroSection'
import SatellitesPage from './SatellitesSection/SatellitesPage'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HeroSection/>
      <SatellitesPage/>
    </div>
  )
}

export default HomePage