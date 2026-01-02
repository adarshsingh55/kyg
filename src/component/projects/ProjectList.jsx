import React from "react";
import styles from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectList({
  projects,
  loading,
  selectedWard,
  selectedDistrict,
  selectedState,
}) {
  const getLocationText = () => {
    if (selectedWard) return selectedWard;
    if (selectedDistrict) return selectedDistrict;
    if (selectedState) return selectedState;
    return "India";
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Loading projects...</p>
        </div>
      );
    }

    if (projects.length === 0) {
      return (
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>📋</div>
          <h3>No projects found</h3>
          <p>
            Select a location on the map or adjust filters to see projects in{" "}
            {getLocationText()}
          </p>
        </div>
      );
    }

    return (
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.projectList}>
      <div className={styles.header}>
        <h3>
          Projects in {getLocationText()} ({projects.length})
        </h3>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}
