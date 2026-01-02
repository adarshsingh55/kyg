import React from "react";
import styles from "./OfficialsList.module.css";

export default function OfficialsList({ filters }) {
  // Mock data for administrative officials
  const officials = [
    {
      id: 1,
      name: "Iqbal Singh Chahal",
      position: "Municipal Commissioner",
      department: "Municipal Corporation of Greater Mumbai",
      experience: "30+ years",
      authority: "Executive Head - All departments",
      phone: "+91-22-XXXX-XXXX",
    },
    {
      id: 2,
      name: "Hemant Rasane",
      position: "Additional Municipal Commissioner",
      department: "MCGM - Disaster Management",
      experience: "25+ years",
      authority: "Oversees Civil Defense & Emergency Response",
      phone: "+91-22-XXXX-XXXX",
    },
    {
      id: 3,
      name: "Rajesh Mahale",
      position: "Deputy Commissioner",
      department: "MCGM - Solid Waste Management",
      experience: "20+ years",
      authority: "Waste collection, segregation & disposal",
      phone: "+91-22-XXXX-XXXX",
    },
    {
      id: 4,
      name: "Nalini Mahajan",
      position: "Deputy Commissioner",
      department: "MCGM - Health Services",
      experience: "22+ years",
      authority: "Public health, disease surveillance, clinics",
      phone: "+91-22-XXXX-XXXX",
    },
    {
      id: 5,
      name: "P. Velarasu",
      position: "Chief Engineer",
      department: "MCGM - Public Works Department",
      experience: "28+ years",
      authority: "Roads, bridges, drainage, water supply",
      phone: "+91-22-XXXX-XXXX",
    },
    {
      id: 6,
      name: "Manisha Parab",
      position: "Ward Officer",
      department: "MCGM - Ward 174 (Worli)",
      experience: "8+ years",
      authority: "Civic services, complaints, local projects",
      phone: "+91-22-XXXX-XXXX",
    },
  ];

  return (
    <div className={styles.listContainer}>
      <div className={styles.count}>
        <strong>{officials.length}</strong> administrative officials
      </div>
      <div className={styles.list}>
        {officials.map((official) => (
          <div key={official.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>
                {official.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className={styles.headerInfo}>
                <h4 className={styles.name}>{official.name}</h4>
                <p className={styles.position}>{official.position}</p>
              </div>
            </div>

            <div className={styles.section}>
              <label>Department</label>
              <p>{official.department}</p>
            </div>

            <div className={styles.section}>
              <label>Authority & Responsibilities</label>
              <p>{official.authority}</p>
            </div>

            <div className={styles.footer}>
              <span className={styles.experience}>
                📅 {official.experience} experience
              </span>
              <span className={styles.phone}>{official.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
