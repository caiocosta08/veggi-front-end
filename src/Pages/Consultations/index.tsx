import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

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
    field: 'date',
    headerName: 'Data',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'status',
    headerName: 'Status',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'description',
    headerName: 'Descrição',
    type: 'number',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
];


function Consultations() {

  const [ consultationList , setconsultationList ] = useState({consultations: []});
  const rows = consultationList.consultations;

  useEffect(() =>{
    api.get('/consultations').then(response => {
      setconsultationList(response.data)
      // console.log('RESPONSE', response)
      // console.log(consultationList)
    })
  }, []);


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

        <PageBody title="Consultas" link="/consultation-form">
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

export default Consultations;