import React from 'react';
import styles from './HistoricTable.module.css';

const mockData = [
  { id: 1, sensor: 'Sensor A', valor: '23.4', ambiente: 'Sala 1', data: '2025-06-10' },
  { id: 2, sensor: 'Sensor B', valor: '25.1', ambiente: 'Sala 2', data: '2025-06-09' },
  { id: 3, sensor: 'Sensor A', valor: '22.8', ambiente: 'Sala 3', data: '2025-06-11' },
];

const HistoricTable = ({ filters }) => {
  // Filtra dados com base nos filtros recebidos
  const filteredData = mockData.filter(entry => {
    const sensorMatch = !filters.sensor || entry.sensor.includes(filters.sensor);
    const ambienteMatch = !filters.ambiente || entry.ambiente.includes(filters.ambiente);
    const dataMatch = !filters.data || entry.data.includes(filters.data);
    return sensorMatch && ambienteMatch && dataMatch;
  });

 return (
    <section className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Sensor</th>
            <th scope="col">Valor</th>
            <th scope="col">Ambiente</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.sensor}</td>
              <td>{row.valor}</td>
              <td>{row.ambiente}</td>
              <td>{row.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default HistoricTable;
