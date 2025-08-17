import React from "react";
import styles from "./Dashboard.module.css";

function ChartPlaceholder({ title }) {
  return (
    <div className={styles.chart}>
      <div className={styles.chartTitle}>{title}</div>
      <div className={styles.chartBox}>[Chart/Graph]</div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDesc}>{description}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.heading}>Dashboard</h2>
      <div className={styles.chartsRow}>
        <ChartPlaceholder title="Spending Overview" />
        <ChartPlaceholder title="Project Progress" />
        <ChartPlaceholder title="Officials Performance" />
      </div>
      <div className={styles.cardsRow}>
        <Card title="Active Projects" description="12 ongoing, 5 completed this month." />
        <Card title="Officials" description="Track work records and accountability." />
        <Card title="Community Proposals" description="3 new proposals awaiting review." />
      </div>
    </div>
  );
}