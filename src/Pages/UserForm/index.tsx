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
import api from '../../services/api';


interface UserData {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  language: string;
  country: string;
  birthday: string;
  sex: string;
  is_psychologist: boolean;
  is_driver: boolean;
  is_client: boolean;
}


function UserForm() {

  // const { screen } = useSelector( (state: ApplicationState) => state); 
  
  const formRef = useRef<FormHandles>(null);
  // const dispatch = useDispatch()
  
  const [is_client, setIsClient] = useState(false);
  const [is_driver, setIsDriver] = useState(false);
  const [is_psychologist, setIsPsychologist] = useState(false);

  
  const handleSubmit: SubmitHandler<UserData> = async data => {

    data.is_client = is_client;
    data.is_driver = is_driver;
    data.is_psychologist = is_psychologist;

    try{
      await api.post('/users/register', {
        user: data
      })
      alert('Usuário cadastrado com sucesso!')
    }catch(err){
      alert('Erro ao cadastrar usuário, tente novamente!')
    }

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
                  <Input name="password" label="Password" type="password"/>
                  <Input name="confirmPassword" label="Confirm Password" type="password"/>
                </div> 
               
                <div className="viewform-block" >
                  <Input 
                    className="checkbox"
                    name="is_psychologist" 
                    label="É psicólogo?" 
                    type="checkbox"
                    onChange={ () => setIsPsychologist(!is_psychologist)}
                  />
                  <Input 
                    className="checkbox"  
                    name="is_driver" 
                    label="É motorista?" 
                    type="checkbox"
                    onChange={ () => setIsDriver(!is_driver)}
                  />
                  <Input 
                    className="checkbox"  
                    name="is_client" 
                    label="É cliente?" 
                    type="checkbox"
                    onChange={ ()=> setIsClient(!is_client)}
                  />
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