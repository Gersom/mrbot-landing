import React from "react";
import { GerLogo } from "../components/GerLogo";

export const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <GerLogo></GerLogo>

        <ul className="nav">
          <li className="nav__element" >
            <a href="#timeline">
              <span>Metas</span>
            </a>
          </li>
          <li className="nav__element" >
            <a href="#help">
              <span>Ayuda</span>
            </a>
          </li>
          <li className="nav__element nav__register" >
            <a href="#register">
              <span>Registro</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}