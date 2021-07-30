import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { connect, useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import './styles.css';
import * as UsersController from '../../controllers/users.controller';
import DataTable from 'react-data-table-component';

interface UserData {
  id: string;
  name: string;
}

function EditUserForm() {

  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch()
  const history = useHistory()
  const [updatedUser, setUpdatedUser] = useState({ id: 0, name: "" });
  const { currentUser } = useSelector((state: RootStateOrAny) => state?.userReducer);

  const handleSubmit: SubmitHandler<UserData> = async data => {

    try {
      data.id = currentUser.id;
      let response = await UsersController.update(data);
      history.push('users');
    } catch (err) {
      alert('Erro ao editar usuário, tente novamente!')
    }

  }

  React.useEffect(() => {
    console.log(currentUser)
    setUpdatedUser(currentUser);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Editar Usuário" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
                <Input name="name" label="Nome" value={updatedUser?.name} onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })} />
                <div className="button-container">
                  <button className="btn-form">Salvar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);