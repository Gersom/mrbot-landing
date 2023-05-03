import React from "react";

export const GerButton = ({
  text= 'Ok',
  small= false
}) => {
  return (
    <button 
      className={
        `ger-button ${small ? 'is--small' : ''}`
      }>
      
      <span>{text}</span>
    </button>
  )
}