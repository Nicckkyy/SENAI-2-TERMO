import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
     <Link to="/" className={styles.logo}>LOGO</Link>
      <nav className={styles.nav}>
        <Link to="/sensores">Sensores</Link>
        <Link to="/ambientes">Ambientes</Link>
        <Link to="/historico">Histórico</Link>
      </nav>
    </aside>
  );
}
