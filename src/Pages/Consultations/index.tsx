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
    name: 'Data',
    selector: 'date',
    sortable: true,
  },
  {
    name: 'Descrição',
    selector: 'description',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
  },

];

function Consultations() {

  const [ consultationList , setconsultationList ] = useState({consultations: []})

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

          <PageBody title="Consultas">
          <p>{consultationList.consultations.map(consultation => {
            console.log(consultation)
          })}</p>
          <div>
            <DataTable
              columns={columns}
              data={consultationList.consultations}
            />
          </div>
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Consultations;