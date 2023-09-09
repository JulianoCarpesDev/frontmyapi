import React from "react";
import './style.css';
import logo from './logo.jpg';
export default function Logout() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Logo da Empresa" className="logo" />
        <h1>Obrigado por visitar nosso site!</h1>
        <p>Esperamos vê-lo novamente em breve.</p>
      </div>
    </div>
  );
}
