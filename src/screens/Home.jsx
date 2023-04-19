import React from "react";

import { CoverPage } from "./../layouts/CoverPage";
import { Header } from "./../layouts/Header";
import { TimeLine } from "./../layouts/TimeLine"

export function Home() {

  return (
    <div className="Home">
      <Header />
      <CoverPage />
      <TimeLine />
    </div>
  );
}
