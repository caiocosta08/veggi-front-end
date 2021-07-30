import React, { useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef, GridSelectionModelChangeParams, GridValueGetterParams } from '@material-ui/data-grid';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../actions/index';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import * as UsersController from '../users.controller';

import { FaBriefcaseMedical, FaCog, FaList, FaNewspaper, FaPen, FaRegBookmark, FaTrash, FaUserAlt } from 'react-icons/fa';
import './styles.css';


function Users() {

  const dispatch = useDispatch();
  const history = useHistory();

  const columns: GridColDef[] = [
    {
      field: 'id',
      width: 100,
      headerName: 'ID',
      align: 'center',
    },
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      width: 300,
    },
    {
      field: "",
      headerName: "TAREFAS",
      width: 300,
      align: 'center',
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          dispatch(setCurrentUser(params.row));
          history.push('current-user-tasks');
        };
        const onClickEdit = () => {
          dispatch(setCurrentUser(params.row));
          history.push('edit-user-form');
        };
        const onClickDel = async () => {
          try {
            let response = await UsersController.remove(params.row.id);
            response = await UsersController.getAll();
            setUsersList(response?.data);
          } catch (error) {

          }
        };

        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClick}><FaList size={15} color={"#0f212f"} /></div>
            <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClickEdit}><FaPen size={15} color={"#0f212f"} /></div>
            <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClickDel}><FaTrash size={15} color={"#0f212f"} /></div>
          </div>);
      },
    },
    
  ];

  const [usersList, setUsersList] = useState({ users: [] })
  const rows = usersList.users;
  const [selectedRows, setSelectedRows] = useState([]);


  const handleSelectionChange = (selection: any) => {
    setSelectedRows(selection.selectionModel);
    console.log(selection)
  };

  const handleGetUsers = async () => {
    try {
      let response = await UsersController.getAll();
      setUsersList(response?.data);
    } catch (error) {

    }
  }

  const handlePurge = async () => {
    await Promise.all(selectedRows.map(async (selectedRow: any) => {
      console.log(selectedRow)
      await api.post('users/delete', {
        user: {
          id: selectedRow
        }
      })
    })
    )
    handleGetUsers();
  }


  useEffect(() => {
    handleGetUsers();
  }, []);

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
            {selectedRows.length !== 0 && <button onClick={handlePurge}>Deletar</button>}
          </PageBody>
        </div>
      </div>

    </div>

  )
}


const mapStateToProps = (state: any) => {
  return {
    currentUser: state.userReducer.currentUser,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentUser: (currentUser: any) => dispatch({ type: 'SET_CURRENT_USER', payload: { currentUser } }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);