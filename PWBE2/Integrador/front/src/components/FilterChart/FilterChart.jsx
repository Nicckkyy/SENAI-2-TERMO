import React from 'react';
import styles from './FilterChart.module.css';

const FilterChart = ({ title, filterKey, onFilterChange }) => {
  const handleClick = (value) => {
    onFilterChange(filterKey, value);
  };

  return (
    <section className={styles.chartCard}>
      <h3>{title}</h3>
      <div className={styles.buttons}>
        <button onClick={() => handleClick('opcao1')}>Opção 1</button>
        <button onClick={() => handleClick('opcao2')}>Opção 2</button>
        <button onClick={() => handleClick('opcao3')}>Opção 3</button>
      </div>
    </section>
  );
};

export default FilterChart;