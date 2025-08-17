import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span role="img" aria-label="logo">🏛️</span> Civitascape
      </div>


    <div className={styles.sidelink}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>Dashboard</NavLink>
        <NavLink to="/projects" className={styles.link}>Projects</NavLink>
        <NavLink to="/officials" className={styles.link}>Officials</NavLink>
        <NavLink to="/community-proposal" className={styles.link}>Community Proposals</NavLink>
        <NavLink to="/reports" className={styles.link}>Reports</NavLink>
      </nav>
      <div className={styles.bottom}>
        <NavLink to="/settings" className={styles.link}>
          <span role="img" aria-label="settings">⚙️</span> Settings
        </NavLink>
      </div>
      </div>
    </aside>
  );
}