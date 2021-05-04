import React from 'react';

import './styles.css'

interface LabelDashedProps {
    fieldName: string;
}

const  LabelDashed: React.FC<LabelDashedProps> = ({ fieldName ,  children }) => {
    return (
        <div className="field-form">
        {children}
        <div className="fields-name">
          {fieldName}
        </div>
      </div>
    )
}

export default LabelDashed;