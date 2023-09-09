import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Clients from './Clients';
import Budget from './Budget';
import Header from './components/header/index';
import Cadastro from './Cadastro';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';


function App() {
  // Estado para controlar se o usuário está logado ou não
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header showNavLinks={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
