import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { connect, useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import './styles.css';
import * as CostsController from '../../controllers/costs.controller';

interface CostData {
  value: string;
  description: string;
  date: string;
  id_responsible: string;
  recipient: string;
}

function CostsForm() {

  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit: SubmitHandler<CostData> = async data => {

    try {
      let response = await CostsController.add(data);
      history.push('costs');
    } catch (err) {
      alert('Erro ao cadastrar usuário, tente novamente!')
    }

  }

  // const { currentCost } = useSelector((state: RootStateOrAny) => state?.costReducer);
  React.useEffect(() => {
    // console.log(currentCost);
  }, []);

  const [value, setValue] = useState("");

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Cadastro de Custo" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
                <Input name="value" type="number" label="Valor" />
                <Input name="description" label="Descrição" />
                <Input name="date" label="Data" />
                <Input name="id_responsible" label="ID do responsável" />
                <Input name="recipient" label="Recebedor" />
                <div className="button-container">
                  <button className="btn-form">Cadastrar</button>
                </div>
              </Form>
            </div>
          </div>
        </PageBody>
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

export default connect(mapStateToProps, mapDispatchToProps)(CostsForm);