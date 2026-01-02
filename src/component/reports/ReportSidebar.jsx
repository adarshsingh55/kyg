import React from "react";
import styles from "./ReportSidebar.module.css";

export default function ReportSidebar({ filters }) {
  const mostDiscussed = [
    {
      id: 1,
      title: "Worli Road Construction",
      count: 234,
    },
    {
      id: 2,
      title: "Health Department Budget Increase",
      count: 189,
    },
    {
      id: 3,
      title: "Waste Management Renewal",
      count: 156,
    },
  ];

  const highBudgetProjects = [
    {
      id: 1,
      title: "Water Pipeline Replacement",
      amount: "₹45 Cr",
      status: "Tender Phase",
    },
    {
      id: 2,
      title: "Worli Road Rehabilitation",
      amount: "₹8.5 Cr",
      status: "Active",
    },
    {
      id: 3,
      title: "Health Facility Network",
      amount: "₹120 Cr",
      status: "In Progress",
    },
  ];

  const delayedProjects = [
    {
      id: 1,
      title: "Malad East Drainage Project",
      delay: "45 days",
      reason: "Material shortage",
    },
    {
      id: 2,
      title: "CCTV Installation Phase 2",
      delay: "22 days",
      reason: "Permitting delay",
    },
  ];

  const lowConfidenceFlags = [
    {
      id: 1,
      title: "School Maintenance Data",
      ward: "Multiple",
      flag: "12 inconsistencies",
    },
    {
      id: 2,
      title: "Vendor Invoice Records",
      ward: "Ward 54",
      flag: "5 missing documents",
    },
  ];

  return (
    <div className={styles.sidebar}>
      {/* Most Discussed */}
      <section className={styles.section}>
        <h3>🔥 Most Discussed</h3>
        <div className={styles.list}>
          {mostDiscussed.map((item) => (
            <div key={item.id} className={styles.item}>
              <p className={styles.itemTitle}>{item.title}</p>
              <span className={styles.count}>{item.count} comments</span>
            </div>
          ))}
        </div>
      </section>

      {/* High Budget Impact */}
      <section className={styles.section}>
        <h3>💰 Highest Budget Impact</h3>
        <div className={styles.list}>
          {highBudgetProjects.map((item) => (
            <div key={item.id} className={styles.item}>
              <p className={styles.itemTitle}>{item.title}</p>
              <div className={styles.itemMeta}>
                <span className={styles.amount}>{item.amount}</span>
                <span className={styles.status}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delayed Projects */}
      <section className={styles.section}>
        <h3>⏰ Projects with Delays</h3>
        <div className={styles.list}>
          {delayedProjects.map((item) => (
            <div key={item.id} className={styles.item}>
              <p className={styles.itemTitle}>{item.title}</p>
              <div className={styles.itemMeta}>
                <span className={styles.delay}>⚠️ {item.delay}</span>
              </div>
              <span className={styles.reason}>{item.reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Low Confidence Data */}
      <section className={styles.section}>
        <h3>🔍 Data Quality Flags</h3>
        <div className={styles.list}>
          {lowConfidenceFlags.map((item) => (
            <div key={item.id} className={styles.item}>
              <p className={styles.itemTitle}>{item.title}</p>
              <div className={styles.itemMeta}>
                <span className={styles.ward}>{item.ward}</span>
              </div>
              <span className={styles.flag}>{item.flag}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
