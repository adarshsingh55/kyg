import React, { useState } from "react";
import styles from "./ProposalCard.module.css";

const CATEGORY_ICONS = {
  Infrastructure: "🛣️",
  "Water & Sanitation": "💧",
  "Traffic & Transport": "🚦",
  Environment: "🌱",
  Education: "🏫",
  Health: "🏥",
  Cleanliness: "🗑️",
  Utilities: "⚡",
  "Governance": "🧠",
};

export default function ProposalCard({ proposal, onOpen }) {
  const [support, setSupport] = useState(proposal.support_count || 0);
  const [supported, setSupported] = useState(false);

  const handleSupport = (e) => {
    e.stopPropagation();
    if (supported) return;
    setSupport((s) => s + 1);
    setSupported(true);
    // TODO: call backend to register support
  };

  const categoryIcon = CATEGORY_ICONS[proposal.category] || "💡";
  const region = proposal.region
    ? `${proposal.region.city}${proposal.region.ward ? `, Ward ${proposal.region.ward}` : ""}`
    : "General";

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString("en-IN");
  };

  return (
    <div className={styles.card} onClick={() => onOpen && onOpen(proposal.id)}>
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <span className={styles.categoryIcon}>{categoryIcon}</span>
        <h3 className={styles.title}>{proposal.title}</h3>
      </div>

      {/* Problem Statement */}
      <p className={styles.description}>{proposal.problem_statement}</p>

      {/* Metadata */}
      <div className={styles.metadata}>
        <div className={styles.metaItem}>
          <span>📍</span>
          <span className={styles.label}>Area:</span>
          <span className={styles.value}>{region}</span>
        </div>

        {proposal.department && (
          <div className={styles.metaItem}>
            <span>🏢</span>
            <span className={styles.label}>Department:</span>
            <span className={styles.value}>{proposal.department}</span>
          </div>
        )}

        <div className={styles.metaItem}>
          <span>📅</span>
          <span className={styles.label}>Created:</span>
          <span className={styles.value}>{timeAgo(proposal.created_at)}</span>
        </div>

        {proposal.created_by && (
          <div className={styles.metaItem}>
            <span>👤</span>
            <span className={styles.label}>By:</span>
            <span className={styles.value}>{proposal.created_by}</span>
          </div>
        )}
      </div>

      {/* Stats & Actions */}
      <div className={styles.statsSection}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.icon}>👍</span>
            <span className={styles.count}>{support}</span>
            <span className={styles.label}>Support</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.icon}>💬</span>
            <span className={styles.count}>{proposal.comment_count || 0}</span>
            <span className={styles.label}>Comments</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.supportBtn} ${supported ? styles.supported : ""}`}
            onClick={handleSupport}
            disabled={supported}
          >
            {supported ? "✓ Supported" : "👍 Support"}
          </button>
          <button className={styles.viewBtn} onClick={() => onOpen && onOpen(proposal.id)}>
            View →
          </button>
        </div>
      </div>

      {/* Category Badge */}
      <div className={styles.categoryBadge}>{proposal.category}</div>
    </div>
  );
}
