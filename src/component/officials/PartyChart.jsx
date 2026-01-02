import React from "react";
import styles from "./PartyChart.module.css";

export default function PartyChart({ filters }) {
  // Mock data for party distribution
  const partyData = [
    { name: "Shiv Sena (UBT)", seats: 28, color: "#FF6B6B" },
    { name: "NCP (SCP)", seats: 17, color: "#4ECDC4" },
    { name: "Indian National Congress", seats: 13, color: "#1890FF" },
    { name: "BJP", seats: 20, color: "#FF8C00" },
    { name: "AAPL", seats: 8, color: "#95E1D3" },
    { name: "Independents", seats: 6, color: "#CCCCCC" },
  ];

  const totalSeats = partyData.reduce((sum, party) => sum + party.seats, 0);
  const maxSeats = Math.max(...partyData.map((p) => p.seats));

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartStats}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Total Seats</div>
          <div className={styles.statValue}>{totalSeats}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Parties</div>
          <div className={styles.statValue}>{partyData.length}</div>
        </div>
      </div>

      <div className={styles.barChart}>
        {partyData.map((party) => (
          <div key={party.name} className={styles.barItem}>
            <div className={styles.barInfo}>
              <span className={styles.partyName}>{party.name}</span>
              <span className={styles.seatCount}>{party.seats} seats</span>
            </div>
            <div className={styles.barOuter}>
              <div
                className={styles.barInner}
                style={{
                  width: `${(party.seats / maxSeats) * 100}%`,
                  backgroundColor: party.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.legend}>
        <h4>Legend</h4>
        <div className={styles.legendItems}>
          {partyData.map((party) => (
            <div key={party.name} className={styles.legendItem}>
              <span
                className={styles.legendColor}
                style={{ backgroundColor: party.color }}
              />
              <span>{party.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.source}>
        <small>📊 Data from Municipal Election Records (2022-2024)</small>
      </div>
    </div>
  );
}
