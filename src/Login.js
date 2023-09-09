import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Link } from 'react-router-dom';


export default function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação das credenciais (substitua isso com sua lógica real de autenticação)
    const validCredentials = { email: 'juliano.carpes@gmail.com', senha: 'admin123' };

    console.log('Email digitado:', formData.email);
    console.log('Senha digitada:', formData.senha);

    if (formData.email === validCredentials.email && formData.senha === validCredentials.senha) {
      setError(''); // Limpa o erro
      setIsLoggedIn(true); // Define isLoggedIn como verdadeiro
      navigate('/home'); // Redireciona para a tela de Home
    } else {
      setError('Email e/ou senha incorretos!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="my-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu E-mail"
          className="form-control"
          required
        />
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite sua Senha"
          required
          className="form-control"
        />
        {error && <div className="error-message">{error}</div>}
        <button className="btnHome" type="submit">
          Login
        </button>
        <p>
         <Link to="/cadastro">Deseja criar uma conta ? clique Aqui!!</Link>
      </p>
      </form>
    
    </div>
  );
  
}
