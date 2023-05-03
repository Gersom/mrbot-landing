import React from "react";

export const GerInput = ({
  plholder = 'Escribe algo',
  type = 'text'
}) => {
  return (
    <div className="ger-input">
      <input 
        type={type}
        placeholder={plholder} />
    </div>
  )
}