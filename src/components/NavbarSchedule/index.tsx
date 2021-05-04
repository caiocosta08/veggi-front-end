import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaPlusCircle, FaRegCalendarAlt, FaSyncAlt } from 'react-icons/fa'

import './styles.css';


function NavbarSchedule() {

  return (
    <section className="section-bar">
      <NavLink   to="/link-account" activeClassName="selected-navbar-schedule">
        <FaSyncAlt size={24}/>
        Vincular Conta
      </NavLink >
      <NavLink  to="/new-post"  activeClassName="selected-navbar-schedule">
        <FaPlusCircle size={24}/>
        Novo Post
      </NavLink >
      <NavLink  to="/calendar"  activeClassName="selected-navbar-schedule">
        <FaRegCalendarAlt size={24}/>
        Calendário
      </NavLink >
      <NavLink  to="loren-1"  activeClassName="selected-navbar-schedule">
        <FaRegCalendarAlt size={24}/>
        Loren Ipsun
      </NavLink >
      <NavLink  to="/loren-2" activeClassName="selected-navbar-schedule">
        <FaRegCalendarAlt size={24}/>
        Loren Ipsun
      </NavLink >
      <NavLink  to="/loren-3" activeClassName="selected-navbar-schedule">
        <FaRegCalendarAlt size={24}/>
        Loren Ipsun
      </NavLink >
    </section>
  )
}

export default NavbarSchedule;