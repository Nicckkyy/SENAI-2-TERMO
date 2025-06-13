import MapView from './MapView';
import styles from './MapCard.module.css';

export default function MapCard() {
  return (
    <section className={styles.mapCard}>
      <h2>Localização Atual</h2>
      <MapView />
    </section>
  );
}
