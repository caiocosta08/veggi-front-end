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
    width: 100,
  },
  {
    field: 'date',
<<<<<<< HEAD
    headerName: 'Date',
    align: 'center',
=======
    headerName: 'Data',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
>>>>>>> 7b9f1dc5dfa5005e9a59eea916b1b1672ab00061
  },
  {
    field: 'status',
    headerName: 'Status',
    align: 'center',
  },
  {
    field: 'starting_point',
    headerName: 'Ponto de partida',
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


function Lessons() {

  const [lessonList, setLessonList] = useState({ lessons: [] });
  const rows = lessonList.lessons;

  useEffect(() => {
    api.get('/lessons/get_detailed_lessons').then(response => {
      setLessonList(response.data)
      console.log('RESPONSE', response.data)
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
<<<<<<< HEAD
              <DataGrid
                rows={rows}
                columns={columns}
=======
              <DataGrid  
                rows={rows} 
                columns={columns} 
>>>>>>> 7b9f1dc5dfa5005e9a59eea916b1b1672ab00061
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

export default Lessons;