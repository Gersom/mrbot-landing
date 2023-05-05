import React, { useRef, useState } from "react";
import { CheckIcon } from "../assets/icons/check";
import { CrossIcon} from "../assets/icons/cross"

export const GerInput = ({
  onVerify = ()=>null,
  onChange = ()=>null, 
  plholder = 'Escribe algo',
  status = 2,
  type = 'text',
  alert = '',
  verify = false,
}) => {

  const [inputValue, setInputValue] = useState('');
  let refValue = useRef('');

  const verifying = () => {
    if (refValue.current.value) {
      if (refValue.current.value && !inputValue) {
        dataCheck()
        return null }
      if (refValue.current.value !== inputValue) {
        dataCheck()
        return null }
      return null
    }
    if (refValue.current.value === '') {
      onVerify('')
    } 
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      verifying()
    }
  }
  
  const dataCheck = () => {
    onVerify(refValue.current.value)
    setInputValue(refValue.current.value)
    // console.log(`${plholder}: `, refValue.current.value)
  }

  const renderVerify = (
    <div 
    className={`gerinput 
      ${status===0?'is--verified':''} 
      ${status===1?'is--error':''} 
      ${alert?'is--alert':''}
    `}>
      <input 
        ref={refValue}
        type={type}
        onBlur={verifying}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={plholder} />
      
      <div className="gerinput__check">
        <CheckIcon />
      </div>

      <div className="gerinput__error">
        <CrossIcon />
      </div>
      <span className="gerinput__alert">
        {alert}</span>
    </div>
  )

  const renderDefault = (
    <div 
    className="gerinput">
      <input
        type={type}
        onChange={onChange}
        placeholder={plholder} />
    </div>
  )

  return (
    verify ? (
      renderVerify
    ) : (
      renderDefault
    )
  )
}