import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

// import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';


import './styles.css';


const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'id_user_client',
    headerName: 'ID do cliente',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'id_lesson',
    headerName: 'Id da aula',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'text',
    headerName: 'Texto',
    type: 'text',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'id_consultation',
    headerName: 'Id da consulta',
    type: 'number',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
];


function Cancellations() {

  const [ cancellationList , setCancellationList ] = useState({cancellations: []});
  const rows = cancellationList.cancellations;

  useEffect(() =>{
    api.get('/cancellations/get_all').then(response => {
      setCancellationList(response.data)
      console.log('RESPONSE', response)
      // console.log(lessonList)
    })
  }, []);


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

        <PageBody title="Cancelamentos">
            <div className="table-wrapper">
              <DataGrid  
                rows={rows} 
                columns={columns} 
                pageSize={5}
                checkboxSelection
                headerHeight={60}
                autoHeight={true}
              />
            </div>
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Cancellations;