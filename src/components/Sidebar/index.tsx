import React from 'react';
import { NavLink } from 'react-router-dom';

import { logout } from '../../services/auth';

import { FaBriefcaseMedical, FaCog,  FaNewspaper,  FaRegBookmark, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

import './styles.css';

function Sidebar() {

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <NavLink to="/users" activeClassName="selected" ><FaUserAlt size={15}/>Usuários</NavLink>
        <NavLink to="/consultations" activeClassName="selected"><FaBriefcaseMedical size={15} /> Consultas</NavLink>
        <NavLink to="/lessons" activeClassName="selected" ><FaRegBookmark size={15}/>Aulas</NavLink>
        <NavLink to="/notices" activeClassName="selected"><FaNewspaper size={15} />Notícias</NavLink>
      </div>
      <div className="footer-sidebar">
        <NavLink to="/settings" activeClassName="selected" ><FaCog size={15} /> Configurações</NavLink>
        <NavLink to="/login" ><FaSignOutAlt size={15} onClick={handleLogout}/> Sair</NavLink>
      </div>
   </div>
  )
}

export default Sidebar;