import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';


import './styles.css';

const columns = [
  {
    name: 'Nome',
    selector: 'first_name',
    sortable: true,
  },
  {
    name: 'E-mail',
    selector: 'email',
    sortable: true,
    right: true,
  },
  {
    name: 'Idioma',
    selector: 'language',
    sortable: true,
    right: true,
  },
];

function Users() {

  const [ usersList , setUsersList ] = useState({users: []})

  useEffect(() =>{
    api.get('/users').then(response => {
      setUsersList(response.data)
      // console.log('RESPONSE', response)
      // console.log(usersList)
    })
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

          <PageBody title="Usuários">
          <p>{usersList.users.map(user => {
            console.log(user)
          })}</p>
            <div className="table-wrapper">
              <DataTable
                columns={columns}
                data={usersList.users}
              />
            </div>
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Users;