import React from "react";

export const GerButton = ({
  text= 'Ok',
  small= false,
  onClick= ()=>null,
}) => {
  return (
    <button 
      onClick={onClick}
      className={
        `ger-button ${small ? 'is--small' : ''}`
      }>
      
      <span>{text}</span>
    </button>
  )
}