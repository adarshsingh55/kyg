import React from "react";
import styles from "./ReportCard.module.css";

export default function ReportCard({ report }) {
  const getTypeIcon = (type) => {
    const icons = {
      project_update: "🟦",
      budget_update: "🟩",
      decision: "🟥",
      tender: "🟪",
      audit: "🟫",
      notice: "🟨",
    };
    return icons[type] || "📄";
  };

  const getTypeLabel = (type) => {
    const labels = {
      project_update: "Project Update",
      budget_update: "Budget Update",
      decision: "Decision",
      tender: "Tender",
      audit: "Audit Flag",
      notice: "Government Notice",
    };
    return labels[type] || "Report";
  };

  const getConfidenceColor = (level) => {
    const colors = {
      high: "#4caf50",
      medium: "#ff9800",
      low: "#f44336",
    };
    return colors[level] || "#999";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString("en-IN");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.typeIcon}>{getTypeIcon(report.type)}</span>
        <h3 className={styles.title}>{report.title}</h3>
      </div>

      <p className={styles.summary}>{report.summary}</p>

      <div className={styles.metadata}>
        <div className={styles.metaItem}>
          <span className={styles.icon}>📍</span>
          <span className={styles.label}>Region:</span>
          <span className={styles.value}>{report.region}</span>
        </div>

        {report.department && (
          <div className={styles.metaItem}>
            <span className={styles.icon}>🏢</span>
            <span className={styles.label}>Department:</span>
            <span className={styles.value}>{report.department}</span>
          </div>
        )}

        {report.impactAmount && (
          <div className={styles.metaItem}>
            <span className={styles.icon}>💰</span>
            <span className={styles.label}>Impact:</span>
            <span className={styles.value}>{report.impactAmount}</span>
          </div>
        )}

        <div className={styles.metaItem}>
          <span className={styles.icon}>📅</span>
          <span className={styles.label}>Date:</span>
          <span className={styles.value}>{formatDate(report.publishedAt)}</span>
        </div>

        {report.source && (
          <div className={styles.metaItem}>
            <span className={styles.icon}>🔗</span>
            <span className={styles.label}>Source:</span>
            <a href={report.source} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {report.sourceLabel || "View"}
            </a>
          </div>
        )}

        <div className={styles.metaItem}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.label}>Confidence:</span>
          <span
            className={styles.confidence}
            style={{ color: getConfidenceColor(report.confidenceLevel) }}
          >
            {report.confidenceLevel.charAt(0).toUpperCase() + report.confidenceLevel.slice(1)}
          </span>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.typeLabel}>{getTypeLabel(report.type)}</span>
        <button className={styles.readMore}>Read more →</button>
      </div>
    </div>
  );
}
