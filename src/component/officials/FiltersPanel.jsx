import React from "react";
import styles from "./FiltersPanel.module.css";

export default function FiltersPanel({ filters, onFilterChange }) {
  const handleStateChange = (e) => {
    onFilterChange({ ...filters, state: e.target.value });
  };

  const handleCityChange = (e) => {
    onFilterChange({ ...filters, city: e.target.value });
  };

  const handleYearChange = (e) => {
    onFilterChange({ ...filters, year: parseInt(e.target.value) });
  };

  return (
    <div className={styles.filtersPanel}>
      <div className={styles.filterGroup}>
        <label>State</label>
        <select value={filters.state} onChange={handleStateChange}>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Gujarat">Gujarat</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>City</label>
        <select value={filters.city} onChange={handleCityChange}>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Financial Year</label>
        <select value={filters.year} onChange={handleYearChange}>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>
    </div>
  );
}
