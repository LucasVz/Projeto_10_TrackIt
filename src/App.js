// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/ Register';
import Habit from './components/Habit';
import Today from './components/Today';
import History from './components/History';
import { useState } from 'react';
import UserContext from './context/UserContext'

export default function App(){

  const [token,setToken] = useState('');
  const [user, setUser] = useState(null);
  const [percent, setPercent] = useState(0);

  return (
    <UserContext.Provider value={{ percent, setPercent, token, setToken, user, setUser }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
            <Route path="/habito" element={<Habit />}></Route>
            <Route path="/hoje" element={<Today  />}></Route>
            <Route path="/historico" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
