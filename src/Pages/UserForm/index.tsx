import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
// import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import { formatarCampo } from '../../utils/masks';


import './styles.css';


interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  language: string;
  country: string;
  birthday: string;
}


function UserForm() {

  // const { screen } = useSelector( (state: ApplicationState) => state); 
  
  const formRef = useRef<FormHandles>(null);
  // const dispatch = useDispatch()
  
  const [fullName, setFullName] = useState('');
  const [CPF_CNPJ, setCPF_CNPJ] = useState('');

  
  const handleSubmit: SubmitHandler<UserData> = async data => {

    console.log('submit handle')
    console.log(data)
  }


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Cadastro de Usuário" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
             
                <div className="viewform-block">
                  <Input name="first_name" label="First Name" />
                  <Input name="last_name" label="Last Name" />
                </div> 
               
                <div className="viewform-block">
                  <Input name="email" label="E-mail" />
                  <Input name="birthday" label="Birthday" type="date"/>
                </div> 
               
                <div className="viewform-block">
                  <Input name="language" label="Language" />
                  <Input name="country" label="Country" />
                </div> 

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

export default UserForm;