import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
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
    field: 'title',
    headerName: 'Title',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'description',
    headerName: 'Description',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'text',
    headerName: 'Text',
    type: 'number',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
];


function Notices() {

  const [ noticesList , setnoticesList ] = useState({notices: []});
  const rows = noticesList.notices;

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

        <PageBody title="Notícias" link="/notices-form">
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

export default Notices;