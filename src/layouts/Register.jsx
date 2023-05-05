import React, { useState } from "react";
import { GerInput } from "../components/GerInput";
import { GerButton } from "../components/GerButton";

export const Register = () => {
  const [registed, setRegisted] = useState(false)

  const [codeStatus, setCodeStatus] = useState(2)
  const [codeAlert, setCodeAlert] = useState('')
  
  const [referenceStatus, setReferenceStatus] = useState(2)
  const [referenceAlert, setReferenceAlert] = useState('')

  const [email, setEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState(2)
  const [emailAlert, setEmailAlert] = useState('')
  
  const submit = () => {
    setInterval(() => {
      console.log('funciona :v')
      setRegisted(true)
    }, 1000);
  }

  const toHome = () => {
    window.location.href='#'
  }

  const verifyCode= (val) => {
    if (val === '') {
      setCodeStatus(2)
      setCodeAlert('')
      return null
    }
    if (val.length === 6) {
      setCodeStatus(0)
      setCodeAlert('Código válido')
    } else {
      setCodeStatus(1)
      setCodeAlert('')
    }
  }
  const verifyReference = (val) => {
    if (val === '') {
      setReferenceStatus(2)
      setReferenceAlert('')
      return null
    }
    if (val.length === 6) {
      setReferenceStatus(0)
      setReferenceAlert('Código válido')
    } else {
      setReferenceStatus(1)
      setReferenceAlert('Código invalido')
    }
  }
  const verifyEmail = (val) => {
    if (val === '') {
      setEmailStatus(2)
      setEmailAlert('')
      return null
    }
  }
  const sendEmail = () => {
    if (email === 'gersom@gmail.com') {
      setEmailStatus(1)
      setEmailAlert('Correo eléctonico ya esta registrado')
    } else {
      setEmailStatus(2)
      setEmailAlert('')
    }
  }

  return (
<div 
  id="register"
  className={`register ${registed ? 'is--registed' : ''}`}>
  <div className="register__container">
    <h2 className="register__title">
      Registrate</h2>

    <div className="register__content">
      <div className="register__side">
        <p className="register__paragraph">
          Verifica tu correo eléctonico</p>

        <div className="register__input">
          <GerInput
            verify={true}
            onChange={event => setEmail(event.target.value)}
            onVerify={verifyEmail}
            status={emailStatus}
            alert={emailAlert}
            plholder='E-mail' /></div>

        <div className="register__input">
          <GerButton
            small={true}
            onClick={sendEmail}
            text='Enviar código' /></div>
          
        <p className="register__paragraph">
          Revisa tu bandeja de entrada y pega el código en el cuadro de abajo</p>

        <div className="register__input">
          <GerInput
            verify={true}
            onVerify={verifyCode}
            status={codeStatus}
            alert={codeAlert}
            plholder='Código de verificación' />
        </div>
      </div>

      <div className="register__side">
        <p className="register__paragraph">
          Rellena esta información necesaria para completa el registro</p>
        
        <div className="register__input">
          <GerInput
            verify={true}
            onVerify={verifyReference}
            status={referenceStatus}
            alert={referenceAlert}
            plholder='Código referido' /></div>

        <div className="register__input">
          <GerInput
            plholder='Nombres' /></div>

        <div className="register__input">
          <GerInput
            plholder='Apellidos' /></div>

        <div className="register__input">
          <GerInput
            type='password'
            plholder='Contraseña' /></div>
      </div>
    </div>

    <div className="register__submit">
      <GerButton
        onClick={submit}
        text='Registrarse' />
    </div>

    <div className="register__success">
      <p className="register__paragraph">
        Ahora puedes ir a la aplicación y comenzar a usar el bot</p>
      
      <h2 className="register__message">
        OH YEAH! <br /> YA ESTAS REGISTRADO</h2>
      <div className="register__to-home">
        <GerButton
          onClick={toHome}
          text='Regresar al inicio' />
      </div>
    </div>
  </div>
</div>
  )
}