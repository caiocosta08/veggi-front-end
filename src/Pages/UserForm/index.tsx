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
import * as UsersController from '../../controllers/users.controller';

interface UserData {
  name: string;
}

function UserForm() {

  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit: SubmitHandler<UserData> = async data => {

    try {
      let response = await UsersController.add(data);
      history.push('users');
    } catch (err) {
      alert('Erro ao cadastrar usuário, tente novamente!')
    }

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
        <PageBody title="Cadastro de Usuário" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
                <Input name="name" label="Nome" />
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
    currentUser: state.userReducer.currentUser,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentUser: (currentUser: any) => dispatch({ type: 'SET_CURRENT_USER', payload: { currentUser } }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);