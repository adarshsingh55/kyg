import React from "react";

const steps = [
  { title: "Data", desc: "Collection from government, APIs, community" },
  { title: "Analytics", desc: "Dashboards, graphs, maps, tracking" },
  { title: "Public", desc: "Accessible platform, feedback, proposals" },
  { title: "Accountability", desc: "Transparency, trust, responsible governance" },
];

export default function ConceptFlow() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "32px",
      margin: "40px 0",
      flexWrap: "wrap"
    }}>
      {steps.map((step, idx) => (
        <React.Fragment key={step.title}>
          <div style={{
            background: "#f4f8fb",
            border: "2px solid #1976d2",
            borderRadius: "16px",
            padding: "24px",
            minWidth: "160px",
            textAlign: "center",
            boxShadow: "0 2px 8px #e0e7ef"
          }}>
            <div style={{ fontSize: "1.3em", fontWeight: "bold", color: "#1976d2" }}>{step.title}</div>
            <div style={{ fontSize: "0.95em", marginTop: "10px", color: "#333" }}>{step.desc}</div>
          </div>
          {idx < steps.length - 1 && (
            <div style={{ fontSize: "2em", color: "#1976d2" }}>→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}