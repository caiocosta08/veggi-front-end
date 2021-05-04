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
    name: 'Status',
    selector: 'status',
    sortable: true,
  },
  {
    name: 'Start point',
    selector: 'start_point',
    sortable: true,
  },
];


function Lessons() {

  const [ lessonList , setLessonList ] = useState({lessons: []})

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

          <PageBody title="Aulas">
          <p>{lessonList.lessons.map(lesson => {
            console.log(lesson)
          })}</p>
          <div>
            <DataTable
              columns={columns}
              data={lessonList.lessons}
            />
          </div>
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Lessons;