import React from 'react';

import { FaPen, FaRegClipboard, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';

import './styles.css';


function CardCapForm() {

  const handleViewForm = () => {
    window.location.href='/view-form'
  }

  return (
    <div className="card-capture-form">
      <h1>Formulário lançamento loren ipsun</h1>
      <hr/>

      <div className="clip-container">
        <FaRegClipboard size={45}/>
      </div>
      <div className="button-form">
        <button type="submit" onClick={handleViewForm}>Ver formulário</button>
      </div>

      <hr/>

      <footer>
        <div className="left-content">
        <FaRegEye size={15} />
        <span>1234</span>
        </div>

        <div className='right-icons'>
          <FaRegTrashAlt size={12} />
          <FaPen size={12}/>
        </div>
      </footer>
    </div>
  )
}

export default CardCapForm;