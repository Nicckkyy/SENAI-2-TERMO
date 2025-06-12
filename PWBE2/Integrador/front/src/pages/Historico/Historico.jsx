import React, { useState } from 'react';
import styles from './Historico.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import FilterChart from '../../components/FilterChart/FilterChart';
import HistoricTable from '../../components/HistoricTable/HistoricTable';

const Historico = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
  };

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        {/* TABELA PRIMEIRO */}
        <section className={styles.tableSection}>
          <HistoricTable filters={filters} />
        </section>

        {/* FILTROS DEPOIS */}
        <section className={styles.chartsSection}>
          <FilterChart title="Por Sensor" filterKey="sensor" onFilterChange={handleFilterChange} />
          <FilterChart title="Por Ambiente" filterKey="ambiente" onFilterChange={handleFilterChange} />
          <FilterChart title="Por Data" filterKey="data" onFilterChange={handleFilterChange} />
        </section>
      </main>
    </div>
  );
};

export default Historico;
