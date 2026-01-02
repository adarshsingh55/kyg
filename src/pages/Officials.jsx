import React, { useState } from "react";
import styles from "./Officials.module.css";
import PartyChart from "../component/officials/PartyChart";
import FiltersPanel from "../component/officials/FiltersPanel";
import RepresentativesList from "../component/officials/RepresentativesList";
import OfficialsList from "../component/officials/OfficialsList";
import BudgetSummary from "../component/officials/BudgetSummary";

export default function Officials() {
  const [filters, setFilters] = useState({
    state: "Maharashtra",
    city: "Mumbai",
    year: 2024,
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.officialsPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Officials & Power Structure</h1>
        <p>View elected representatives, administrative officials, budgets & decision-making authority</p>
      </div>

      {/* Filters */}
      <FiltersPanel filters={filters} onFilterChange={handleFilterChange} />

      {/* Main Content Grid */}
      <div className={styles.mainContent}>
        {/* Left Section - Party Distribution & Lists */}
        <div className={styles.leftSection}>
          {/* Party Distribution Chart */}
          <section className={styles.section}>
            <h2>Party Seat Distribution</h2>
            <PartyChart filters={filters} />
          </section>

          {/* Elected Representatives */}
          <section className={styles.section}>
            <h2>Elected Representatives</h2>
            <RepresentativesList filters={filters} />
          </section>

          {/* Administrative Officials */}
          <section className={styles.section}>
            <h2>Administrative Officials</h2>
            <OfficialsList filters={filters} />
          </section>
        </div>

        {/* Right Section - Sidebar */}
        <aside className={styles.rightSection}>
          <BudgetSummary filters={filters} />
        </aside>
      </div>
    </div>
  );
}