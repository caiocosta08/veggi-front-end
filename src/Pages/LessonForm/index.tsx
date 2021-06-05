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
import Select from '../../components/Select';
// import { paymentPage } from '../../store/modules/screen/types';
// import { setPaymentOption } from '../../store/modules/screen/actions';



interface LessonData {
  description: string;
  date: string;
  id_user_client: number;
  id_user_driver: number;
  status: string;
  id_default_time: string;
}

const clients = [
  { value: 1, label:"Caio Henrique"},
  { value: 2, label:"Igor Sales"},
  { value: 3, label:"Maximiliano Kolbe"}
]
const driver = [
  { value: 1, label:"Juliana Paula"},
  { value: 2, label:"Jhon"},
  { value: 3, label:"Juliano Moreira"}
]

const status = [
  { value:"scheduled", label:"Scheduled"},
  { value:"confirmed", label:"Confirmed"},
  { value:"canceled", label:"Canceled"}
]


function LessonForm() {

  // const { screen } = useSelector( (state: ApplicationState) => state); 
  
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<LessonData> = async data => {

    console.log('submit handle')
    data.id_default_time = "1"
    console.log(data)
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Cadastro de aulas" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
             
              <div className="viewform-block">
                  <Input name="description" label="Description" />
                  <Input name="date" label="Date" type="date"/>
                </div> 
               
                <div className="viewform-block">
                  <Select name="id_user_client" label="Client" options={clients}/>
                  <Select name="id_user_driver" label="Driver" options={driver}/>
                </div> 
               
                <div className="viewform-block">
                  <Select name="status" label="Status" options={status}/>
                  <Input name="strating_point" label="Start point" />
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

export default LessonForm;