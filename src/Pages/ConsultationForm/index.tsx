import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
// import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


interface ConsultationData {
  description: string;
  date: string;
  id_user_client: number;
  id_user_psychologist: number;
  status: string;
  id_default_time: string;
}

const clients = [
  { value: 1, label:"Caio Henrique"},
  { value: 2, label:"Igor Sales"},
  { value: 3, label:"Maximiliano Kolbe"}
]
const psychologist = [
  { value: 1, label:"Juliana Paula"},
  { value: 2, label:"Jhon"},
  { value: 3, label:"Juliano Moreira"}
]

const status = [
  { value:"scheduled", label:"Scheduled"},
  { value:"confirmed", label:"Confirmed"},
  { value:"canceled", label:"Canceled"}
]

function ConsultationForm() {

  // const { screen } = useSelector( (state: ApplicationState) => state); 
  
  const formRef = useRef<FormHandles>(null);
  
  const handleSubmit: SubmitHandler<ConsultationData> = async data => {

    console.log('submit handle')
    data.id_default_time = "1"
    console.log(data)
    
  }


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Cadastro de consultas" >
          <div className="payment-container">
            <div className="form-block">
              <Form onSubmit={handleSubmit} ref={formRef}>
             
                <div className="viewform-block">
                  <Input name="description" label="Description" />
                  <Input name="date" label="Date" type="date"/>
                </div> 
               
                <div className="viewform-block">
                  <Select name="id_user_client" label="Client" options={clients}/>
                  <Select name="id_user_psychologist" label="Psychologist" options={psychologist}/>
                </div> 
               
                <div className="viewform-block">
                  <Select name="status" label="Status" options={status}/>

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

export default ConsultationForm;