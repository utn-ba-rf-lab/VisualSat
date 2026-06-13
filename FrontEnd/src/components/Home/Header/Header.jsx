import React from 'react'
import './Header.css'
import logo from '../../../assets/VisualSat_isotipo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' height={100}/>
      <div className='nosotros text'>Nosotros</div>
    </div>
  )
}

export default Header