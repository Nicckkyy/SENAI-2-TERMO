import DataCard from '../../components/DataCard/DataCard';
import styles from './Sensores.module.css';

const headers = ['ID', 'Tipo', 'Status', 'Local'];
const rows = [
  ['1', 'Temperatura', 'Ativo', 'Sala 1'],
  ['2', 'Umidade', 'Inativo', 'Sala 2'],
  ['3', 'Pressão', 'Ativo', 'Sala 3'],
];

export default function Sensores() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sensores</h2>
      <DataCard title="Lista de Sensores" headers={headers} rows={rows} />
    </div>
  );
}
