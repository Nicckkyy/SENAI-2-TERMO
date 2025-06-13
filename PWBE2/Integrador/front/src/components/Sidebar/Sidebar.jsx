import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logoText}>MinhaLogo</h1>
        </Link>
      </div>

      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/sensores" className={styles.navLink}>Sensores</Link>
          </li>
          <li>
            <Link to="/ambientes" className={styles.navLink}>Ambientes</Link>
          </li>
          <li>
            <Link to="/historico" className={styles.navLink}>Históricos</Link>
          </li>
        </ul>
      </nav>

      <footer className={styles.authSection}>
        {isLoggedIn ? (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        )}
      </footer>
    </aside>
  );
};

export default Sidebar;
