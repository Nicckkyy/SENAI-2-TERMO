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
    <main className={styles.container}>
      <h1 className={styles.title}>Sensores</h1>
      <section>
        <DataCard title="Lista de Sensores" headers={headers} rows={rows} />
      </section>
    </main>
  );
}