import React, { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
import { DataGrid, GridColDef, GridSelectionModelChangeParams, GridValueGetterParams } from '@material-ui/data-grid';
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
    field: 'first_name',
    headerName: 'First name',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'last_name',
    headerName: 'Last name',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'sex',
    headerName: 'Gender',
    type: 'number',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    sortable: false,
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'country',
    headerName: 'Country',
    sortable: false,
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  }
];

function Users() {

  const [ usersList , setUsersList ] = useState({users: []})
  const rows = usersList.users;
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() =>{
    api.get('/users').then(response => {
      setUsersList(response.data)
      // console.log('RESPONSE', response)
      // console.log(usersList)
    })
  }, []);

  const handleSelectionChange = (selection: any) => {
    setSelectedRows(selection.selectionModel);
    console.log(selection)
  };

  const handlePurge = async () => {
    await Promise.all(selectedRows.map(async (selectedRow :any) => {
        console.log(selectedRow)
        await api.post('users/delete', {
          user: {
            id: selectedRow
          }
        })
      })
    )

    api.get('/users').then(response => {
      setUsersList(response.data)
    })

  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

          <PageBody title="Usuários" link="/user-form">
            <div className="table-wrapper">
              <DataGrid  
                rows={rows} 
                columns={columns} 
                pageSize={5}
                checkboxSelection
                headerHeight={60}
                autoHeight={true}
                onSelectionModelChange={handleSelectionChange}
              />
            </div>
            { selectedRows.length !== 0 && <button onClick={handlePurge}>Deletar</button>}
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Users;