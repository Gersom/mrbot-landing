import React, { Fragment } from "react";
import { Header } from "./Header";
import { GerButton } from "./GerButton";

export const CoverPage = ({}) => {
  return (
    <div className="cover-page">
      <Header></Header>

      <div className="cover-page__content">
        <h2>Mr. Bot Tu mejor Aliado en Criptomonedas</h2>
        <p>
        Usa nuestro bot  para generar ganancias muy buenas, despreocupate de los movimientos  tediosos, lo hacemos por usted.
        </p>
        <div className="cover-page__download">
          <img src="#" alt="" />
          <img src="#" alt="" />
        </div>
        <GerButton></GerButton>
      </div>

      <div>
        <img src="#" alt="" />
      </div>
    </div>
  )
}