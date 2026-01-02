import React, { useState } from "react";
import styles from "./Reports.module.css";
import ReportFilters from "../component/reports/ReportFilters";
import ReportFeed from "../component/reports/ReportFeed";
import ReportSidebar from "../component/reports/ReportSidebar";

export default function Reports() {
  const [filters, setFilters] = useState({
    state: "Maharashtra",
    city: "Mumbai",
    ward: "",
    department: "",
    timeRange: "30",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.reportsPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Reports & Civic News</h1>
        <p>Government updates, project news, budgets & decisions — scoped to your region</p>
      </div>

      {/* Filters */}
      <ReportFilters filters={filters} onFilterChange={handleFilterChange} />

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Center Feed */}
        <div className={styles.feedSection}>
          <ReportFeed filters={filters} />
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebarSection}>
          <ReportSidebar filters={filters} />
        </aside>
      </div>
    </div>
  );
}