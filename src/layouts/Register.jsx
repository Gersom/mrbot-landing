import React, { useState } from "react";
import { GerInput } from "../components/GerInput";
import { GerButton } from "../components/GerButton";

export const Register = () => {
  const [registed, setRegisted] = useState(false)

  const submit = () => {
    setInterval(() => {
      console.log('funciona :v')
      setRegisted(true)
    }, 1000);
  }

  const toHome = () => {
    window.location.href='#'
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
            plholder='E-mail' /></div>

        <div className="register__input">
          <GerButton
            small={true}
            text='Enviar código' /></div>
          
        <p className="register__paragraph">
          Revisa tu bandeja de entrada y pega el código en el cuadro de abajo</p>

        <div className="register__input">
          <GerInput
            plholder='Código de verificación' />
        </div>
      </div>

      <div className="register__side">
        <p className="register__paragraph">
          Rellena esta información necesaria para completa el registro</p>
        
        <div className="register__input">
          <GerInput
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