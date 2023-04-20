import React from "react";
import { GerLogo } from "../components/GerLogo";

export const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <GerLogo></GerLogo>

        <ul className="nav">
          <li className="nav__element" >
            <a href="#a">
              <span>Metas</span>
            </a>
          </li>
          <li className="nav__element" >
            <a href="#a">
              <span>Ayuda</span>
            </a>
          </li>
          <li className="nav__element nav__register" >
            <a href="#a">
              <span>Registro</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}