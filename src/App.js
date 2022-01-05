// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Habito from './components/Habito';
import Hoje from './components/Hoje';
import Historico from './components/Historico';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/habito" element={<Habito/>}></Route>
        <Route path="/hoje" element={<Hoje/>}></Route>
        <Route path="/historico" element={<Historico/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
