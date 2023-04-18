import React, { Fragment } from "react";
import { Gerlogo } from "./GerLogo";

export const Header = ({}) => {
  return (
    <div className="header">
      <Gerlogo></Gerlogo>

      <ul className="nav">
        <li className="nav__element" >
          <a href="#">
            <span>Metas</span>
          </a>
        </li>
        <li className="nav__element" >
          <a href="#">
            <span>Ayuda</span>
          </a>
        </li>
        <li className="nav__element" >
          <a href="#">
            <span>Registro</span>
          </a>
        </li>
      </ul>
    </div>
  )
}