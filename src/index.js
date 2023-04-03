import React from 'react';
import ReactDOM from 'react-dom/client';

import "./css/index.css"

import MainApp from "./pages/main"

const Main = ReactDOM.createRoot(document.querySelector("main"));

Main.render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
);