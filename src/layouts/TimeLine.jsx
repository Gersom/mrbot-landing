import React from "react";
import { GerTimeline } from "../components/GerTimeline";

export const TimeLine = () => {
  return (
    <div className="time-line">
      <h2 className="time-line__title">
        Nuestra misión a largo plazo
      </h2>
      <div className="time-line__content">
        <GerTimeline />
      </div>
    </div>
  )
}