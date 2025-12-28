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
        <NavLink to="/" className={styles.link}><span role="img" aria-label="dashboard">📊</span><span className={styles.text}>Dashboard</span></NavLink>
        <NavLink to="/projects" className={styles.link}><span role="img" aria-label="projects">📁</span><span className={styles.text}>Projects</span></NavLink>
        <NavLink to="/officials" className={styles.link}><span role="img" aria-label="officials">👥</span><span className={styles.text}>Officials</span></NavLink>
        <NavLink to="/community-proposal" className={styles.link}><span role="img" aria-label="proposals">💬</span><span className={styles.text}>Community Proposal</span></NavLink>
        <NavLink to="/reports" className={styles.link}><span role="img" aria-label="reports">📈</span><span className={styles.text}>Reports</span></NavLink>
      </nav>
      <div className={styles.bottom}>
        <NavLink to="/settings" className={styles.link}>
          <span role="img" aria-label="settings">⚙️</span><span className={styles.text}>Settings</span>
        </NavLink>
      </div>
      </div>
    </aside>
  );
}