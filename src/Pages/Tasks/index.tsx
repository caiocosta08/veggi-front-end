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
    field: 'description',
    headerName: 'Descrição',
    align: 'center',
    width: 140,
  },
  {
    field: 'state',
    headerName: 'Estado',
    align: 'center',
    width: 140,
  },
  {
    field: 'id_user',
    headerName: 'ID do Usuário',
    align: 'center',
    width: 140,
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


function Tasks() {

  const [tasksList, setTasksList] = useState({ tasks: [] });
  const rows = tasksList.tasks;

  useEffect(() => {
    api.get('/tasks/').then(response => {
      setTasksList(response.data)
      console.log('RESPONSE', response.data)
    })
  }, []);


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

          <PageBody title="Tarefas" link="/tasks-form">
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

export default Tasks;