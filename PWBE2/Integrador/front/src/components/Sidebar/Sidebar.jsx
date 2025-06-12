import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo no topo, linkando para a home */}
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          {/* Pode ser texto ou imagem */}
          <h1 className={styles.logoText}>MinhaLogo</h1>
        </Link>
      </div>

      {/* Menu de navegação */}
      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sensores" className={styles.navLink}>
              Sensores
            </Link>
          </li>
          <li>
            <Link to="/ambientes" className={styles.navLink}>
              Ambientes
            </Link>
          </li>
          <li>
            <Link to="/historico" className={styles.navLink}>
              Históricos
            </Link>
          </li>
        </ul>
      </nav>

      {/* Seção login/logout */}
      <div className={styles.authSection}>
        {isLoggedIn ? (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
