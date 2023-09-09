import React from "react";
import './style.css';
import logo from './logo.jpg';

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Logo da Empresa" className="logo" />
        <h1>Bem-vindo à Nossa Jornada Digital!</h1>
        <p>Explore o mundo da inovação e da tecnologia conosco.</p>
        <p>Descubra como nossa aplicação conecta você com a potência da API Java.</p>
        <p>Prepare-se para uma experiência incrível!</p>
        <a href="/sobre" className="saiba-mais">Saiba Mais</a>
      </div>
    </div>
  );
}
