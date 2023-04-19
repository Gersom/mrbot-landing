import React from "react";
import { Gerlogo } from "../components/GerLogo";

export const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <Gerlogo></Gerlogo>

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
          <li className="nav__element" >
            <a href="#a">
              <span>Registro</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}