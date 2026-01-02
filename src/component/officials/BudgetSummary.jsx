import React from "react";
import styles from "./BudgetSummary.module.css";

export default function BudgetSummary({ filters }) {
  // Mock data for budget summary
  const budgetData = [
    {
      department: "Public Works Department",
      allocated: "₹450 Cr",
      spent: "₹320 Cr",
      percentage: 71,
    },
    {
      department: "Health Services",
      allocated: "₹120 Cr",
      spent: "₹95 Cr",
      percentage: 79,
    },
    {
      department: "Solid Waste Management",
      allocated: "₹200 Cr",
      spent: "₹180 Cr",
      percentage: 90,
    },
    {
      department: "Education",
      allocated: "₹150 Cr",
      spent: "₹125 Cr",
      percentage: 83,
    },
    {
      department: "Sports & Culture",
      allocated: "₹60 Cr",
      spent: "₹42 Cr",
      percentage: 70,
    },
  ];

  const totalAllocated = "₹980 Cr";
  const totalSpent = "₹762 Cr";

  return (
    <div className={styles.sidebar}>
      <h3>Budget Summary by Department</h3>
      <p className={styles.subtitle}>
        {filters.city} - FY {filters.year}
      </p>

      <div className={styles.totalBox}>
        <div className={styles.totalItem}>
          <span>Total Allocated</span>
          <strong>{totalAllocated}</strong>
        </div>
        <div className={styles.totalItem}>
          <span>Total Spent</span>
          <strong>{totalSpent}</strong>
        </div>
      </div>

      <div className={styles.departments}>
        {budgetData.map((dept, idx) => (
          <div key={idx} className={styles.deptItem}>
            <div className={styles.deptName}>{dept.department}</div>
            <div className={styles.deptAmount}>
              <span className={styles.allocated}>{dept.allocated}</span>
              <span className={styles.spent}>{dept.spent}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${dept.percentage}%` }}
              />
            </div>
            <div className={styles.percentage}>{dept.percentage}% spent</div>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.btn}>View Detailed Budget</button>
      </div>

      <div className={styles.infoBox}>
        <h4>How to Read</h4>
        <ul>
          <li>
            <span className={styles.allocated}>■</span> Allocated Budget
          </li>
          <li>
            <span className={styles.spent}>■</span> Spent Amount
          </li>
          <li>
            <span className={styles.pending}>■</span> Pending
          </li>
        </ul>
      </div>

      <div className={styles.source}>
        <small>📋 Source: BMC Finance Department (Annual Report)</small>
      </div>
    </div>
  );
}
