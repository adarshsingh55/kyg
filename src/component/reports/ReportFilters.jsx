import React from "react";
import styles from "./ReportFilters.module.css";

export default function ReportFilters({ filters, onFilterChange }) {
  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className={styles.filtersPanel}>
      <div className={styles.filterGroup}>
        <label>State</label>
        <select
          value={filters.state}
          onChange={(e) => handleChange("state", e.target.value)}
        >
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>City</label>
        <select
          value={filters.city}
          onChange={(e) => handleChange("city", e.target.value)}
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nagpur">Nagpur</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Ward (Optional)</label>
        <input
          type="text"
          placeholder="Enter ward number or name"
          value={filters.ward}
          onChange={(e) => handleChange("ward", e.target.value)}
        />
      </div>

      <div className={styles.filterGroup}>
        <label>Department (Optional)</label>
        <select
          value={filters.department}
          onChange={(e) => handleChange("department", e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="Public Works">Public Works</option>
          <option value="Health Services">Health Services</option>
          <option value="Solid Waste Management">Solid Waste Management</option>
          <option value="Education">Education</option>
          <option value="Water Supply">Water Supply</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Time Range</label>
        <select
          value={filters.timeRange}
          onChange={(e) => handleChange("timeRange", e.target.value)}
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last 1 year</option>
          <option value="all">All time</option>
        </select>
      </div>
    </div>
  );
}
