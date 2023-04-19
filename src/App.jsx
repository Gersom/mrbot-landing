import React from "react";

import { CoverPage } from "./layouts/CoverPage";
import { Header } from "./layouts/Header";

import './styles/index.css';

export function App() {

  return (
    <div className="App">
      <Header />
      <CoverPage />
    </div>
  );
}
