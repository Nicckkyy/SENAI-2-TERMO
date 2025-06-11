import DataCard from '../../components/DataCard/DataCard';
import styles from './Ambientes.module.css';

const headers = ['ID', 'Nome', 'Setor', 'Capacidade'];
const rows = [
  ['1', 'Sala 101', 'Administrativo', '20'],
  ['2', 'Laboratório 1', 'Pesquisa', '15'],
  ['3', 'Sala 203', 'Ensino', '30'],
];

export default function Ambientes() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ambientes</h2>
      <DataCard title="Ambientes Monitorados" headers={headers} rows={rows} />
    </div>
  );
}
