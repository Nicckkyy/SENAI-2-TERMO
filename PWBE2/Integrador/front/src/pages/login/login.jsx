import React, { useState } from 'react';
import styles from './login.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados de login (pode integrar com seu backend Django aqui)
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Nome de usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
          <div className={styles.footer}>
            <a href="#" className={styles.recoverPassword}>Recuperar senha</a>
            <a href="#" className={styles.register}>Cadastrar!</a>
          </div>
        </form>
      </div>
      <footer className={styles.socialLinks}>
        <a href="#" className={styles.socialIcon}>Instagram</a>
        <a href="#" className={styles.socialIcon}>YouTube</a>
        <a href="#" className={styles.socialIcon}>Facebook</a>
      </footer>
    </div>
  );
};

export default LoginPage;
