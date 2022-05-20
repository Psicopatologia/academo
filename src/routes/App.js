import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from "../pages/Login";
import '../styles/global.scss'

function App() {
  return (
    <BrowserRouter basename="/academo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
