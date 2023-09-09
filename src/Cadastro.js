import React, { useState } from "react";
import './style.css'
import { formatPhoneNumber } from './config/Configs'
import { Link, Navigate } from 'react-router-dom';

export default function Cadastro() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: ""
  });
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Formata o valor do telefone usando a função importada
    if (name === "telefone") {
      const telefoneFormatado = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: telefoneFormatado
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação do número de telefone
    if (formData.telefone.length !== 15) {
      setError("O número de telefone deve ter 15 caracteres.");
      return; // Não envie o formulário se a validação falhar
    }

    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor ou realizar qualquer outra ação necessária.
    console.log("Dados do formulário:", formData);
    alert('Cadastro efetuado com sucesso');
    setError(""); // Limpa qualquer mensagem de erro anterior
    setIsRegistered(true); // Define como registrado
  }

  return (
    <div>
      <h1>Cadastro de Conta</h1>
      <form className="my-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          className="form-control"
          value={formData.nome.charAt(0).toLocaleUpperCase() + formData.nome.slice(1)}
          onChange={handleChange}
          placeholder="Digite Seu Nome"
          required
        />

        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Digite seu E-mail"
        />

        <input
          type="tel"
          className="form-control"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          placeholder="(DD)X-XXXX-XXXX"
        />
        <input
          type="password"
          className="form-control"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
          placeholder="Nova senha"
        />
        {error && <div className="error-message">{error}</div>}
        
        {isRegistered && <Navigate to="/" />} {/* Redireciona automaticamente para a tela de login */}
        
        <button className='btnHome' type="submit">Cadastrar</button>
      </form>

      {isRegistered && (
        <p>
          Cadastro efetuado com sucesso! Você pode <Link to="/">fazer login</Link> agora.
        </p>
      )}
    </div>
  );
}
