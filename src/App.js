// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/ Register';
import Habito from './components/Habito';
import Hoje from './components/Hoje';
import Historico from './components/Historico';
import { useState } from 'react';

export default function App(){

  const [token,setToken] = useState('');
  const [user, setUser] = useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser = {setUser} setToken = {setToken} />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
        <Route path="/habito" element={<Habito user = {user} token = {token} />}></Route>
        <Route path="/hoje" element={<Hoje user = {user} token = {token}/>}></Route>
        <Route path="/historico" element={<Historico/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
