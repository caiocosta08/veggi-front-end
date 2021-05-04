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
    name: 'Titulo',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Descrição',
    selector: 'description',
    sortable: true,
  },
  {
    name: 'Texto',
    selector: 'text',
    sortable: true,
  },
];

function Notices() {

  const [ noticesList , setnoticesList ] = useState({notices: []})

  useEffect(() =>{
    api.get('/notices/get_all').then(response => {
      setnoticesList(response.data)
      // console.log('RESPONSE', response)
      // console.log(noticesList)
    })
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

          <PageBody title="Notícias" >
          <p>{noticesList.notices.map(newData => {
            console.log(newData)
          })}</p>
          <div>
            <DataTable
              columns={columns}
              data={noticesList.notices}
            />
          </div>
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Notices;