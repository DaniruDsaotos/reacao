import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reacao from './components/Reacao';
// import * as ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="cadastro" element={<Reacao />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
