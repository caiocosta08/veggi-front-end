import React, { useEffect } from 'react';
import logotipo from '../../assets/images/logo-veggi.png';
import './styles.css';

function Navbar() {

  return (
    <div className="navbar ">
      <img src={logotipo} alt="logo-talkis" />
      <div className="left-content">
        <label htmlFor="perfil"></label>
      </div>
    </div>
  )
}

export default Navbar;