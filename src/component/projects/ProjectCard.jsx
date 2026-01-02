import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (project._id) {   
      navigate(`/projects/${project._id}`);
    }
  };

  const getBudgetPercentage = () => {
    if (!project.budget_allocated || project.budget_allocated === 0) return 0;
    return Math.min(
      ((project.budget_spent || 0) / project.budget_allocated) * 100,
      100
    );
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "planned":
        return "#fbbf24";
      case "ongoing":
        return "#60a5fa";
      case "completed":
        return "#34d399";
      case "on hold":
        return "#f87171";
      default:
        return "#d1d5db";
    }
  };

  const formatCurrency = (amount) => {
    if (!amount) return "₹0";
    return "₹" + amount.toLocaleString("en-IN");
  };

  return (
    <div className={styles.projectCard} onClick={handleCardClick}>
      <div className={styles.cardHeader}>
        <h4 className={styles.projectName}>
          {project.name || "Unnamed Project"}
        </h4>
        <span
          className={styles.statusBadge}
          style={{ backgroundColor: getStatusColor(project.status) }}
        >
          {project.status || "Unknown"}
        </span>
      </div>

      <div className={styles.cardBody}>
        {/* Department */}
        {project.department && (
          <div className={styles.infoRow}>
            <span className={styles.label}>🏢 Department</span>
            <span className={styles.value}>{project.department.name}</span>
          </div>
        )}

        {/* Budget Info */}
        <div className={styles.infoRow}>
          <span className={styles.label}>💰 Budget</span>
          <div className={styles.budgetInfo}>
            <div className={styles.budgetText}>
              {formatCurrency(project.budget_spent)} /{" "}
              {formatCurrency(project.budget_allocated)}
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${getBudgetPercentage()}%` }}
              ></div>
            </div>
            <div className={styles.budgetPercent}>
              {Math.round(getBudgetPercentage())}% spent
            </div>
          </div>
        </div>

        {/* Location */}
        {project.representation && (
          <div className={styles.infoRow}>
            <span className={styles.label}>📍 Location</span>
            <span className={styles.value}>{project.representation.name}</span>
          </div>
        )}

        {/* Officers */}
        {project.officers && project.officers.length > 0 && (
          <div className={styles.infoRow}>
            <span className={styles.label}>👤 Officers</span>
            <div className={styles.officersList}>
              {project.officers.map((officer, idx) => (
                <span key={idx} className={styles.officerBadge}>
                  {officer.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Decisions Count */}
        {project.decisions_count !== undefined && (
          <div className={styles.infoRow}>
            <span className={styles.label}>📋 Decisions</span>
            <span className={styles.value}>{project.decisions_count || 0}</span>
          </div>
        )}
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.viewButton}>View Details →</button>
      </div>
    </div>
  );
}
