import React, { useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef, GridSelectionModelChangeParams, GridValueGetterParams } from '@material-ui/data-grid';
import { connect, useDispatch, useSelector } from 'react-redux';
// import { setCurrentCost } from '../../actions/index';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import * as CostsController from '../../controllers/costs.controller';

import './styles.css';


function Costs() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [descriptionWidth, setDescriptionWidth] = useState(100)

  const columns: GridColDef[] = [
    {
      field: 'id',
      width: 100,
      headerName: 'ID',
      align: 'center',
    },
    {
      field: 'value',
      headerName: ' Valor (R$)',
      align: 'center',
      width: 120,
    },
    {
      field: 'description',
      headerName: 'Descrição',
      align: 'center',
      resizable: true,
      width: 300,
      // renderCell: (params) => {
      //   const onClick = () => {
      //     setDescriptionWidth(descriptionWidth >= 100 ? 100 : 400);
      //   };
      //   return (
      //     <div style={{ display: 'flex', flexDirection: 'row' }}>
      //       <div style={{ marginLeft: 5, marginRight: 5, }} className="button-see-more" onClick={onClick}>{params.row.description}</div>
      //     </div>);
      // }
    },
    {
      field: 'id_responsible',
      headerName: 'Resposável (ID)',
      align: 'center',
      width: 100,
    },
    {
      field: 'recipient',
      headerName: 'Recebedor',
      align: 'center',
      width: 300,
    },
    {
      field: 'date',
      headerName: 'Data',
      align: 'center',
      width: 110,
    },
    // {
    //   field: "",
    //   headerName: "TAREFAS",
    //   width: 300,
    //   align: 'center',
    //   disableClickEventBubbling: true,
    //   renderCell: (params) => {
    //     const onClick = () => {
    //       dispatch(setCurrentCost(params.row));
    //       history.push('current-cost-tasks');
    //     };
    //     const onClickEdit = () => {
    //       dispatch(setCurrentCost(params.row));
    //       history.push('edit-cost-form');
    //     };
    //     const onClickDel = async () => {
    //       try {
    //         let response = await CostsController.remove(params.row.id);
    //         response = await CostsController.getAll();
    //         setCostsList(response?.data);
    //       } catch (error) {

    //       }
    //     };

    //     return (
    //       <div style={{ display: 'flex', flexDirection: 'row' }}>
    //         <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClick}><FaList size={15} color={"#0f212f"} /></div>
    //         <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClickEdit}><FaPen size={15} color={"#0f212f"} /></div>
    //         <div style={{ marginLeft: 5, marginRight: 5, backgroundColor: "transparent" }} className="button-see-more" onClick={onClickDel}><FaTrash size={15} color={"#0f212f"} /></div>
    //       </div>);
    //   },
    // },

  ];

  const [costsList, setCostsList] = useState({ costs: [] })
  const rows = costsList?.costs || [];
  const [selectedRows, setSelectedRows] = useState([]);


  const handleSelectionChange = (selection: any) => {
    setSelectedRows(selection.selectionModel);
    console.log(selection)
  };

  const handleGetCosts = async () => {
    try {
      let response = await CostsController.getAll();
      setCostsList(response?.data);
    } catch (error) {

    }
  }

  const handlePurge = async () => {
    await Promise.all(selectedRows.map(async (selectedRow: any) => {
      console.log(selectedRow)
      await api.post('costs/delete', {
        cost: {
          id: selectedRow
        }
      })
    })
    )
    handleGetCosts();
  }


  useEffect(() => {
    handleGetCosts();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

          <PageBody title="Custos" link="/costs-form">
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
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Costs);