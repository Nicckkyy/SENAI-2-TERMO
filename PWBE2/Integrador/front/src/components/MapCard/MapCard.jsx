import MapView from './MapView';
import styles from './MapCard.module.css';

export default function MapCard() {
  return (
    <div className={styles.mapCard}>
      <h2>Localização Atual</h2>
      <MapView />
    </div>
  );
}