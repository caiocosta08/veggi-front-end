import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import * as TasksController from '../../controllers/tasks.controller'
import { useHistory } from 'react-router-dom'

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

interface TaskData {
  description: string;
  id_user: number;
  state: string;
}

const states = [
  { value: "FEITO", label: "Feito" },
  { value: "PENDENTE", label: "Pendente" },
]

function TasksForm() {

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const handleSubmit: SubmitHandler<TaskData> = async data => {
    try {
      let response = await TasksController.add(data);
      history.goBack();
    } catch (error) {

    }
    console.log(data)
  }

  const { currentUser } = useSelector((state: RootStateOrAny) => state?.userReducer);
  React.useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Cadastro de tarefas" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
                <Input name="id_user" label="ID do Usuário" value={currentUser?.id} />
                <Input name="description" label="Descrição" />
                <Select name="state" label="Estado" options={states} />
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

export default TasksForm;