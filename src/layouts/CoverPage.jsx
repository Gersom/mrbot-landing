import React from "react";
import { GerButton } from "../components/GerButton";

export const CoverPage = () => {

  const toRegister = () => {
    window.location.href='#register'
  }

  return (
<div className="cover-page">
  <div className="container cover-page__container">
    <div className="cover-page__content">
      <h2 className="cover-page__title">
        Mr. Bot. X Tu mejor Aliado en Criptomonedas</h2>
      <p className="cover-page__description">
        Usa nuestro bot  para generar ganancias muy buenas, despreocupate de los movimientos  tediosos, lo hacemos por usted.
      </p>
      <div className="cover-page__download">
        <a href="#x">
          <img src="https://cdn.discordapp.com/attachments/892890373469397074/1098030044913348688/es_badge_web_generic_1.png" alt="" />
        </a>
        <a href="#x">
          <img src="https://cdn.discordapp.com/attachments/892890373469397074/1098030192896786534/appstore_1.png" alt="" />
        </a>
      </div>
      <div className="cover-page__register">
        <GerButton 
          onClick={toRegister}
          text='Registrate' />
      </div>
    </div>

    <div className="cover-page__app">
      <img src="https://cdn.discordapp.com/attachments/892890373469397074/1098037803117449216/App.png" alt="" />
    </div>
  </div>
</div>
  )
}