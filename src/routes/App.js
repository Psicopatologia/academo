import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from "../pages/Login";
import { ClassPage } from "../pages/ClassPage";
import '../styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/class" element={<ClassPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
