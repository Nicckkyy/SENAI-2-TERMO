import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>LOGO</h2>
      <nav className={styles.nav}>
        <a href="#">Sensores</a>
        <a href="#">Ambientes</a>
        <a href="#">Históricos</a>
      </nav>
    </aside>
  );
}
