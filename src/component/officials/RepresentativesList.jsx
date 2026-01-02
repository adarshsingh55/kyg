import React from "react";
import styles from "./RepresentativesList.module.css";

export default function RepresentativesList({ filters }) {
  // Mock data
  const representatives = [
    {
      id: 1,
      name: "Aaditya Thackeray",
      party: "Shiv Sena (UBT)",
      position: "State Minister (Tourism & Environment)",
      ward: "Worli Ward (Ward 174)",
      email: "aaditya@shiv-sena.com",
      phone: "+91-22-XXXX-XXXX",
      tenure: "2020 - Present",
    },
    {
      id: 2,
      name: "Preeti Wagh",
      party: "Shiv Sena (UBT)",
      position: "Municipal Corporator",
      ward: "Kamothe Ward (Ward 213)",
      email: "preeti.wagh@bmc.gov.in",
      phone: "+91-22-XXXX-XXXX",
      tenure: "2022 - Present",
    },
    {
      id: 3,
      name: "Medha Patkar",
      party: "Indian National Congress",
      position: "Municipal Corporator",
      ward: "Malvani Ward (Ward 159)",
      email: "medha.patkar@bmc.gov.in",
      phone: "+91-22-XXXX-XXXX",
      tenure: "2022 - Present",
    },
    {
      id: 4,
      name: "Bhavna Gawali",
      party: "NCP (SCP)",
      position: "Municipal Corporator",
      ward: "Kala Nagar Ward (Ward 175)",
      email: "bhavna.gawali@bmc.gov.in",
      phone: "+91-22-XXXX-XXXX",
      tenure: "2022 - Present",
    },
    {
      id: 5,
      name: "Ravindra Waikar",
      party: "BJP",
      position: "Municipal Corporator",
      ward: "Mahim Ward (Ward 172)",
      email: "ravindra.waikar@bmc.gov.in",
      phone: "+91-22-XXXX-XXXX",
      tenure: "2022 - Present",
    },
    {
      id: 6,
      name: "Asif Zakaria",
      party: "Indian National Congress",
      position: "Municipal Corporator",
      ward: "Byculla Ward (Ward 188)",
      email: "asif.zakaria@bmc.gov.in",
      phone: "+91-22-XXXX-XXXX",
      tenure: "2022 - Present",
    },
  ];

  return (
    <div className={styles.listContainer}>
      <div className={styles.count}>
        <strong>{representatives.length}</strong> representatives
      </div>
      <div className={styles.list}>
        {representatives.map((rep) => (
          <div key={rep.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.avatar}>
                {rep.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className={styles.info}>
                <h4 className={styles.name}>{rep.name}</h4>
                <p className={styles.position}>{rep.position}</p>
                <p className={styles.party}>{rep.party}</p>
              </div>
            </div>
            <div className={styles.details}>
              <span className={styles.ward}>{rep.ward}</span>
              <span className={styles.tenure}>{rep.tenure}</span>
            </div>
            <div className={styles.contact}>
              <a href={`mailto:${rep.email}`}>{rep.email}</a>
              <span>{rep.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
