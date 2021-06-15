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
    field: 'date',
    headerName: 'Date',
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
    field: 'starting_point',
    headerName: 'Start Point',
    type: 'number',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
];


function Lessons() {

  const [ lessonList , setLessonList ] = useState({lessons: []});
  const rows = lessonList.lessons;

  useEffect(() =>{
    api.get('/lessons').then(response => {
      setLessonList(response.data)
      // console.log('RESPONSE', response)
      // console.log(lessonList)
    })
  }, []);



  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

        <PageBody title="Aulas" link="/lesson-form">
            <div className="table-wrapper">
              <DataGrid  
                rows={rows} 
                columns={columns} 
                pageSize={10}
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

export default Lessons;