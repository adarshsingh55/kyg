import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import MapPanel from "../component/projects/MapPanel";
import FiltersPanel from "../component/projects/FiltersPanel";
import ProjectList from "../component/projects/ProjectList";

export default function Projects() {
  // Map navigation state
  const [selectedLevel, setSelectedLevel] = useState("india"); // india, state, district, ward
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  // Filters state
  const [filters, setFilters] = useState({
    department: null,
    status: null,
    budgetMin: 0,
    budgetMax: 1000000,
    officer: null,
  });

  // Projects state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch projects based on selected area and filters
  useEffect(() => {
    fetchProjects();
  }, [selectedWard, selectedDistrict, selectedState, filters]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      // Build query string based on selected area
      const params = new URLSearchParams();

      if (selectedWard) {
        params.append("ward", selectedWard);
      } else if (selectedDistrict) {
        params.append("district", selectedDistrict);
      } else if (selectedState) {
        params.append("state", selectedState);
      }

      // Add filters
      if (filters.department) params.append("department", filters.department);
      if (filters.status) params.append("status", filters.status);
      params.append("budgetMin", filters.budgetMin);
      params.append("budgetMax", filters.budgetMax);
      if (filters.officer) params.append("officer", filters.officer);

      // TODO: Replace with actual backend API endpoint
      const response = await fetch(`/api/projects?${params}`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle map drill-down navigation
  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setSelectedLevel("state");
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setSelectedWard(null);
    setSelectedLevel("district");
  };

  const handleWardSelect = (ward) => {
    setSelectedWard(ward);
    setSelectedLevel("ward");
  };

  const handleMapBack = () => {
    if (selectedWard) {
      setSelectedWard(null);
      setSelectedLevel("district");
    } else if (selectedDistrict) {
      setSelectedDistrict(null);
      setSelectedLevel("state");
    } else if (selectedState) {
      setSelectedState(null);
      setSelectedLevel("india");
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleResetFilters = () => {
    setFilters({
      department: null,
      status: null,
      budgetMin: 0,
      budgetMax: 1000000,
      officer: null,
    });
  };

  return (
    <div className={styles.projectsContainer}>
      {/* <div className={styles.header}>
        <h1>Projects</h1>
        <p className={styles.subtitle}>
          Explore government projects across India
        </p>
      </div> */}

      <div className={styles.mainContent}>
        {/* Left Panel: Map */}
        <div className={styles.mapSection}>
          <MapPanel
            selectedLevel={selectedLevel}
            selectedState={selectedState}
            selectedDistrict={selectedDistrict}
            selectedWard={selectedWard}
            onStateSelect={handleStateSelect}
            onDistrictSelect={handleDistrictSelect}
            onWardSelect={handleWardSelect}
            onMapBack={handleMapBack}
            projects={projects}
          />
        </div>

        {/* Right Panel: Filters + List */}
        <div className={styles.contentSection}>
          {/* Filters Panel */}
          <div className={styles.filtersSection}>
            <FiltersPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              selectedState={selectedState}
              selectedDistrict={selectedDistrict}
              selectedWard={selectedWard}
            />
          </div>

          {/* Projects List */}
          <div className={styles.listSection}>
            <ProjectList
              projects={projects}
              loading={loading}
              selectedWard={selectedWard}
              selectedDistrict={selectedDistrict}
              selectedState={selectedState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
