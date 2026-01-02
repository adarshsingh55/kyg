import React, { useState } from "react";
import styles from "./FiltersPanel.module.css";

export default function FiltersPanel({
  filters,
  onFilterChange,
  onResetFilters,
  selectedState,
  selectedDistrict,
  selectedWard,
}) {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    department: true,
    status: true,
    budget: false,
  });
      
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const departments = [
    "Public Works",
    "Health",
    "Education",
    "Transportation",
    "Urban Development",
    "Water Supply",
    "Sanitation",
  ];

  const statuses = ["Planned", "Ongoing", "Completed", "On Hold"];

  return (
    <div className={styles.filtersPanel}>
      <div className={styles.header}>
        <h3>Filters</h3>
        <button className={styles.resetButton} onClick={onResetFilters}>
          Reset All
        </button>
      </div>

      {/* Location */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection("location")}
        >
          <span>📍 Location</span>
          <span className={styles.toggleIcon}>
            {expandedSections.location ? "▼" : "▶"}
          </span>
        </button>
        {expandedSections.location && (
          <div className={styles.sectionContent}>
            {selectedState && (
              <div className={styles.selectedItem}>
                State: <strong>{selectedState}</strong>
              </div>
            )}
            {selectedDistrict && (
              <div className={styles.selectedItem}>
                District: <strong>{selectedDistrict}</strong>
              </div>
            )}
            {selectedWard && (
              <div className={styles.selectedItem}>
                Ward: <strong>{selectedWard}</strong>
              </div>
            )}
            {!selectedState && (
              <p className={styles.placeholder}>Select from map</p>
            )}
          </div>
        )}
      </div>

      {/* Department */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection("department")}
        >
          <span>🏢 Department</span>
          <span className={styles.toggleIcon}>
            {expandedSections.department ? "▼" : "▶"}
          </span>
        </button>
        {expandedSections.department && (
          <div className={styles.sectionContent}>
            {departments.map((dept) => (
              <label key={dept} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={filters.department === dept}
                  onChange={(e) =>
                    onFilterChange({
                      department: e.target.checked ? dept : null,
                    })
                  }
                />
                <span>{dept}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Status */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection("status")}
        >
          <span>📊 Status</span>
          <span className={styles.toggleIcon}>
            {expandedSections.status ? "▼" : "▶"}
          </span>
        </button>
        {expandedSections.status && (
          <div className={styles.sectionContent}>
            {statuses.map((status) => (
              <label key={status} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={filters.status === status}
                  onChange={(e) =>
                    onFilterChange({
                      status: e.target.checked ? status : null,
                    })
                  }
                />
                <span>{status}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Budget Range */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection("budget")}
        >
          <span>💰 Budget Range</span>
          <span className={styles.toggleIcon}>
            {expandedSections.budget ? "▼" : "▶"}
          </span>
        </button>
        {expandedSections.budget && (
          <div className={styles.sectionContent}>
            <div className={styles.sliderContainer}>
              <label>
                Min: ₹{filters.budgetMin.toLocaleString()}
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="50000"
                  value={filters.budgetMin}
                  onChange={(e) =>
                    onFilterChange({ budgetMin: parseInt(e.target.value) })
                  }
                  className={styles.slider}
                />
              </label>
              <label>
                Max: ₹{filters.budgetMax.toLocaleString()}
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="50000"
                  value={filters.budgetMax}
                  onChange={(e) =>
                    onFilterChange({ budgetMax: parseInt(e.target.value) })
                  }
                  className={styles.slider}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
