import React, { useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';

// import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';


import './styles.css';


const columns: GridColDef[] = [
  { 
    field: 'paymentId', 
    headerName: 'ID do pagamento',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'tid', 
    headerName: 'TID',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'id_client', 
    headerName: 'Id do cliente',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'authorizationCode', 
    headerName: 'Código de autorização',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'buyValue', 
    headerName: 'Valor da compra',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'returnCode', 
    headerName: 'Código de retorno',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'returnMessage', 
    headerName: 'Mensagem de retorno',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
  },
  { 
    field: 'capture', 
    headerName: 'Faturado',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <div>
        {(params.value) === 1 ? 'SIM': 'NÃO'}
      </div>
    ),
  },
  { 
    field: 'isClassCredits', 
    headerName: 'Crédito de aula?',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <div>
        {(params.value) === 1 ? 'SIM': 'NÃO'}
      </div>
    ),
  },
  { 
    field: 'isConsultationCredits', 
    headerName: 'Crédito de consulta?',
    align: 'center', 
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <div>
        {(params.value) === 1 ? 'SIM': 'NÃO'}
      </div>
    ),
  },

];


function Transactions() {

  const [ transactionsList , setTransactionsList ] = useState({transactions: []});
  const rows = transactionsList.transactions;

  useEffect(() =>{
    api.get('/transactions/get_all').then(response => {
      setTransactionsList(response.data)
      console.log('RESPONSE', response)
      // console.log(lessonList)
    })
  }, []);



  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">

        <PageBody title="Transações" >
            <div className="table-wrapper">
              <DataGrid  
                rows={rows} 
                columns={columns} 
                pageSize={5}
                checkboxSelection
                headerHeight={60}
                autoHeight={true}
                getRowId={(row)=> row.paymentId}
              />
            </div>
          </PageBody>
        </div>
      </div>

    </div>

  )
}

export default Transactions;