import React from "react";
import { SpacecraftIcon } from "../assets/icons/spacecraft";
import { StatisticIcon } from "../assets/icons/statistic";

export const GerTimeline = () => {
  return (
    <ul className="timeline">
      <li className="timeline__element">
        <div className="timeline__objective">
          <div className="timeline__icon">
            <SpacecraftIcon />
          </div>
          <p className="timeline__paragraph">
            Lanzamiento de la version beta de la aplicación</p>
        </div>
        <h4 className="timeline__month">
          ABRIL</h4>
      </li>

      <li className="timeline__element">
        <div className="timeline__objective">
          <div className="timeline__icon">
            <StatisticIcon />
          </div>
          <p className="timeline__paragraph">
            Recoleccion de datos sobre finanzas</p>
        </div>
        <h4 className="timeline__month">
          MAYO</h4>
      </li>

      <li className="timeline__element">
        <div className="timeline__objective">
          <div className="timeline__icon">
            <SpacecraftIcon />
          </div>
          <p className="timeline__paragraph">
            Lanzamiento de la primera version estable de la App</p>
        </div>
        <h4 className="timeline__month">
          JUNIO</h4>
      </li>

      <li className="timeline__element">
        <div className="timeline__objective">
          <div className="timeline__icon">
            <SpacecraftIcon />
          </div>
          <p className="timeline__paragraph">
            Lanzamiento de la primera version estable de la App</p>
        </div>
        <h4 className="timeline__month">
          JUNIO</h4>
      </li>

      <li className="timeline__element">
        <div className="timeline__objective">
          <div className="timeline__icon">
            <SpacecraftIcon />
          </div>
          <p className="timeline__paragraph">
            Lanzamiento de la primera version estable de la App</p>
        </div>
        <h4 className="timeline__month">
          JUNIO</h4>
      </li>
    </ul>
  )
}