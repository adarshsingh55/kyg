import React, { useState, useEffect } from "react";
import styles from "./MapPanel.module.css";

export default function MapPanel({
  selectedLevel,
  selectedState,
  selectedDistrict,
  selectedWard,
  onStateSelect,
  onDistrictSelect,
  onWardSelect,
  onMapBack,
  projects,
}) {
  // Placeholder GeoJSON data - will be replaced with real data
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    loadMapData();
  }, [selectedLevel, selectedState, selectedDistrict]);

  const loadMapData = async () => {
    try {
      // TODO: Fetch actual GeoJSON based on selectedLevel
      // For now, placeholder data structure
      const data = {
        type: "FeatureCollection",
        features: [],
      };
      setMapData(data);
    } catch (error) {
      console.error("Failed to load map data:", error);
    }
  };

  const renderMapContent = () => {
    switch (selectedLevel) {
      case "india":
        return (
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapHeader}>
              <h3>India</h3>
            </div>
            <div className={styles.mapContent}>
              <p>Interactive India map with states</p>
              <div className={styles.stateGrid}>
                {[
                  "Andhra Pradesh",
                  "Arunachal Pradesh",
                  "Assam",
                  "Bihar",
                  "Chhattisgarh",
                  "Goa",
                  "Gujarat",
                  "Haryana",
                  "Himachal Pradesh",
                  "Jharkhand",
                  "Karnataka",
                  "Kerala",
                  "Madhya Pradesh",
                  "Maharashtra",
                  "Manipur",
                  "Meghalaya",
                  "Mizoram",
                  "Nagaland",
                  "Odisha",
                  "Punjab",
                  "Rajasthan",
                  "Sikkim",
                  "Tamil Nadu",
                  "Telangana",
                  "Tripura",
                  "Uttar Pradesh",
                  "Uttarakhand",
                  "West Bengal",
                ].map((state) => (
                  <button
                    key={state}
                    className={styles.stateButton}
                    onClick={() => onStateSelect(state)}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "state":
        return (
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapHeader}>
              <button className={styles.backButton} onClick={onMapBack}>
                ← Back
              </button>
              <h3>{selectedState}</h3>
            </div>
            <div className={styles.mapContent}>
              <p>Interactive {selectedState} map with districts</p>
              <div className={styles.districtGrid}>
                {[
                  "District 1",
                  "District 2",
                  "District 3",
                  "District 4",
                  "District 5",
                ].map((district, idx) => (
                  <button
                    key={idx}
                    className={styles.districtButton}
                    onClick={() => onDistrictSelect(district)}
                  >
                    {district}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "district":
        return (
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapHeader}>
              <button className={styles.backButton} onClick={onMapBack}>
                ← Back
              </button>
              <h3>{selectedDistrict}</h3>
            </div>
            <div className={styles.mapContent}>
              <p>Interactive {selectedDistrict} map with wards/cities</p>
              <div className={styles.wardGrid}>
                {[
                  "Ward 1",
                  "Ward 2",
                  "Ward 3",
                  "Ward 4",
                  "Ward 5",
                  "Ward 6",
                ].map((ward, idx) => (
                  <button
                    key={idx}
                    className={styles.wardButton}
                    onClick={() => onWardSelect(ward)}
                  >
                    {ward}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "ward":
        return (
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapHeader}>
              <button className={styles.backButton} onClick={onMapBack}>
                ← Back
              </button>
              <h3>{selectedWard}</h3>
            </div>
            <div className={styles.mapContent}>
              <p>Map view with {projects.length} projects</p>
              <div className={styles.projectMarkers}>
                {projects.length > 0 ? (
                  projects.map((project, idx) => (
                    <div key={idx} className={styles.marker}>
                      📍 {project.name}
                    </div>
                  ))
                ) : (
                  <p className={styles.noProjects}>No projects in this area</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className={styles.mapPanel}>{renderMapContent()}</div>;
}
