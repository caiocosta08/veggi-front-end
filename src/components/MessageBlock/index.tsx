import React, { HTMLAttributes } from 'react';

import { IoLogoWhatsapp } from 'react-icons/io';
import exampleImg from '../../assets/images/example.jpg';

import './styles.css';

interface MessageBlockProps extends HTMLAttributes<HTMLInputElement>{
  name?: string
}

const MessageBlock: React.FC<MessageBlockProps> = ({ name, children, ...rest }) => {

  return (
    <div className="talk-messages">
      <img src={exampleImg} alt="img conversation"/>
      <div className="message-info">
          <h2>Igor Sales</h2>
          <p>Preciso de mais informações por f...</p>
      </div>
      <div className="hour-block">
        <p>12:23</p>
        <IoLogoWhatsapp size={20}/>
      </div>
    </div>
  )
}

export default MessageBlock;