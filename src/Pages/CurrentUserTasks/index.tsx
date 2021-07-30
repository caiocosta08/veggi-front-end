import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import * as TasksController from '../../controllers/tasks.controller';

import { FaTrash } from 'react-icons/fa';
import './styles.css';
import { RootStateOrAny, useSelector } from 'react-redux';



function CurrentUserTasks() {

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
        const onClick = async () => {
          console.log(params)
          try {
            let response = await TasksController.remove(params.row.id);
            handleGetTasks();
          } catch (error) {

          }
        };
        const onChangeState = async () => {
          console.log(params)
          try {
            let currentState = params.row.state;
            let response = await TasksController.update({ 
              id: params.row.id, 
              state: currentState == "FEITO" ? "PENDENTE" : "FEITO",
              id_user: currentUser?.id,
              description: params.row.description
            });
            handleGetTasks();
          } catch (error) {

          }
        };
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginLeft: 5, marginRight: 5 }} className="button-see-more" onClick={onChangeState}>MUDAR ESTADO</div>
            <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClick}><FaTrash size={15} color={"#0f212f"} /></div>
          </div>);
      },
    }
  ];

  const [tasksList, setTasksList] = useState({ tasks: [] });
  const rows = tasksList?.tasks;
  const { currentUser } = useSelector((state: RootStateOrAny) => state?.userReducer);

  const handleGetTasks = async () => {
    try {
      let response = await TasksController.getAllByIdUser(currentUser?.id);
      console.log({ response });
      setTasksList(response?.data);
    } catch (error) {

    }
  }

  useEffect(() => {
    handleGetTasks();
  }, []);


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

          <PageBody title={"Tarefas do Usuário " + currentUser?.name} link="/tasks-form">
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

export default CurrentUserTasks;