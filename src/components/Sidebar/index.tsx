import { NavLink } from 'react-router-dom';

import { FaMoneyBill, FaUserAlt } from 'react-icons/fa';

import './styles.css';

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <NavLink to="/users" activeClassName="selected" ><FaUserAlt size={15} />Usuários</NavLink>
        <NavLink to="/costs" activeClassName="selected" ><FaMoneyBill size={15} />Custos</NavLink>
      </div>
    </div>
  )
}

export default Sidebar;