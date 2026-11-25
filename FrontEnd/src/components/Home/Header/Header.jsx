import React, { useState } from 'react';
import './Header.css';
import logo from '../../../assets/VisualSat_isotipo.png';
import { useNavigate } from 'react-router-dom';
import PasadasModal from '../../Modals/PasadasModal/PasadasModal';
import NosotrosModal from '../../Modals/NosotrosModal/NosotrosModal';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pasadasModalOpen, setPasadasModalOpen] = useState(false);
  const [nosotrosModalOpen, setNosotrosModalOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
    setMenuOpen(false);
  };

  const handleOpenPasadasModal = () => {
    setMenuOpen(false);
    setPasadasModalOpen(true);
  };

  const handleOpenNosotrosModal = () => {
    setMenuOpen(false);
    setNosotrosModalOpen(true);
  };

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="logo"
          className="header_logo"
          onClick={handleLogoClick}
        />

        <button
          type="button"
          className={`menu_toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Alternar menú de navegación"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <button
            type="button"
            className="navbar_link text"
            onClick={handleOpenPasadasModal}
          >
            Pasadas
          </button>
          <button
            type="button"
            className="navbar_link text"
            onClick={handleOpenNosotrosModal}
          >
            Nosotros
          </button>
        </nav>
      </header>

      <PasadasModal
        isOpen={pasadasModalOpen}
        onClose={() => setPasadasModalOpen(false)}
      />

      
      <NosotrosModal
        isOpen={nosotrosModalOpen}
        onClose={() => setNosotrosModalOpen(false)}
      />
    </>
  );
};

export default Header;