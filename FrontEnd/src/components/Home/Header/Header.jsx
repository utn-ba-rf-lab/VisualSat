import React from 'react'
import './Header.css'
import logo from '../../../assets/VisualSat_isotipo.png'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <img src={logo} alt='logo' height={100} onClick={() => navigate('/')}/>
      <div className='navbar'>
        <Link to="/pasadas" className='navbar_link text'>Pasadas</Link>
        <Link className='navbar_link text'>Nosotros</Link>
      </div>
    </div>
  )
}

export default Header