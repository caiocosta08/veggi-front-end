import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import  './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string
}

const TextArea: React.FC<InputProps> = ({ label, name, ...rest }) => {
  
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const {fieldName, registerField, error, defaultValue }= useField(name);

  useEffect(() =>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (

    <div className="textarea-block">
      <label htmlFor={ name }>{ label }</label>
      <textarea ref={inputRef} id={ name } { ...rest } defaultValue={defaultValue} />
      { error && <span style={{color:'#f00'}}>{error}</span>}
    </div>

  );
}

export default TextArea;