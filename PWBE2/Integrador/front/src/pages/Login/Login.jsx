import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Login/Login.module.css";
import { login } from "../../Services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");      // campo de username/email
  const [password, setPassword] = useState(""); // campo de senha
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login({ username: email, password });
      localStorage.setItem("access", response.access);
      localStorage.setItem("refresh", response.refresh);
      navigate("/");
    } catch (err) {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <main className={styles.loginPage}>
      <section className={styles.loginLeft}>
        <h1>Bem-vindo!</h1>
      </section>

      <section className={styles.loginRight}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h2>Login</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.loginOptions}>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>

          <footer className={styles.loginFooter}>
            <p>Não tem uma conta?</p>
            <Link to="/signup">Cadastre-se</Link>
          </footer>

          <nav className={styles.socialLogin} aria-label="Login social">
            <i className="fab fa-google" role="button" tabIndex={0} aria-label="Login com Google"></i>
            <i className="fab fa-facebook" role="button" tabIndex={0} aria-label="Login com Facebook"></i>
          </nav>
        </form>
      </section>
    </main>
  );
};

export default Login;
