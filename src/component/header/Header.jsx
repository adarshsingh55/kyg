import React from "react";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <input className={styles.search} placeholder="Search projects..." />
      <div className={styles.right}>
        <span className={styles.icon}>🔔</span>
        <div className={styles.avatar}>40 × 40</div>
      </div>
    </header>
  );
}