// Estrutura inicial da tela de login baseada fielmente no Figma
// Projeto React com CSS puro (sem bibliotecas externas)

import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="overlay">
        <div className="login-box">
        <img src=".././imagens/logo_senai.png" alt="SENAI" className="logo-senai" />
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Nome de usuário:"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha:"
            className="login-input"
          />

          <button className="login-button">Login!</button>
          <button className="secondary-button">Recuperar senha</button>
          <button className="secondary-button">Cadastrar!</button>

          <div className="social-icons">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
