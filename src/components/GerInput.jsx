import React from "react";
import { CheckIcon } from "../assets/icons/check";
import { CrossIcon} from "../assets/icons/cross"

export const GerInput = ({
  plholder = 'Escribe algo',
  type = 'text',
  verify = 2
}) => {
  return (
    <div 
    className={`gerinput 
      ${verify===0?'is--verified':''}
      ${verify===1?'is--error':''}`
    }>
      <input 
        type={type}
        placeholder={plholder} />
      
      <div className="gerinput__check">
        <CheckIcon />
      </div>

      <div className="gerinput__error">
        <CrossIcon />
      </div>
    </div>
  )
}