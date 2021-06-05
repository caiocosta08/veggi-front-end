import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
// import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import { formatarCampo } from '../../utils/masks';
// import { ApplicationState } from '../../store';

import { FaBarcode, FaRegCreditCard } from 'react-icons/fa';

import './styles.css';
import TextArea from '../../components/TextArea';
import api from '../../services/api';
// import { paymentPage } from '../../store/modules/screen/types';
// import { setPaymentOption } from '../../store/modules/screen/actions';




interface NoticesData {
  title: string;
  description: string;
  text: string;
}


function NoticesForm() {

  // const { screen } = useSelector( (state: ApplicationState) => state); 
  
  const formRef = useRef<FormHandles>(null);
  // const dispatch = useDispatch()

  
  const handleSubmit: SubmitHandler<NoticesData> = async data => {
    try{
      await api.post('/notices/new', data)
      alert('Notícia cadastrada com sucesso!')
    }catch(err){
      alert('Erro ao cadastrar notícia, tente novamente!')
    }
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Cadastro de Notícias" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
             
                <div className="viewform-block">
                  <Input name="title" label="Title" />
                  <Input name="description" label="Description" />
                </div> 
               
                <div className="viewform-block">
                  <TextArea name="text" label="Text" />
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

export default NoticesForm;