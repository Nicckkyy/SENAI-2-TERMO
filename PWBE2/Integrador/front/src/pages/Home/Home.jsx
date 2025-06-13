import Card from '../../components/Card/Card';
import MapCard from '../../components/MapCard/MapCard';
import styles from './Home.module.css';

const sensoresData = [
  { name: 'Temp', value: 12 },
  { name: 'Umidade', value: 8 },
];

const ambientesData = [
  { name: 'Sala 1', value: 2 },
  { name: 'Sala 2', value: 3 },
];

const alertasData = [
  { name: 'Hoje', value: 1 },
  { name: 'Ontem', value: 2 },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.cards}>
        <Card title="Sensores Ativos" data={sensoresData} />
        <Card title="Ambientes Monitorados" data={ambientesData} />
        <Card title="Alertas Recentes" data={alertasData} />
      </section>
      <section>
        <MapCard />
      </section>
    </main>
  );
}
