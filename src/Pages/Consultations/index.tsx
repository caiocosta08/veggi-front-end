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
    width: 100,
    
  },
  { 
    field: 'date',
    headerName: 'Date',
    align: 'center', 
    
  },
  { 
    field: 'status',
    headerName: 'Status',
    align: 'center', 
    
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'number',
    align: 'center', 
    
  },
  {
    field: "",
    headerName: "AÇÃO",
    width: 140,
    align: 'center',
    disableClickEventBubbling: true,
    renderCell: (params) => {
      const onClick = () => {
        console.log(params)
      };

      return <div className="button-see-more" onClick={onClick}>VER DETALHES</div>;
    }
  }
];


function Consultations() {

  const [ consultationList , setconsultationList ] = useState({consultations: []});
  const rows = consultationList.consultations;

  useEffect(() =>{
    // api.get('/consultations').then(response => {
      api.get('/consultations/get_detailed_consultations').then(response => {
      setconsultationList(response.data)
      console.log('RESPONSE', response.data)
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