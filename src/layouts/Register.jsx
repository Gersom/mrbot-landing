import React from "react";
import { GerInput } from "../components/GerInput";
import { GerButton } from "../components/GerButton";

export const Register = () => {
  return (
    <div className="register">
      <h2 className="register__title">
        Registrate</h2>

      <div className="register__content">
        <div className="register__side">
          <p className="register__paragraph">
            Rellena los campos para continuar</p>

          <div className="register__input">
            <GerInput
              plholder='E-mail' /></div>

          <div className="register__input">
            <GerButton
              small={true}
              text='Enviar código' /></div>
            
          <p className="register__paragraph">
            Te enviamos un dodigo pegalo en el cuadro de abajo</p>

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
          text='Registrarse' />
      </div>

    </div>
  )
}