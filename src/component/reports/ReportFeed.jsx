import React, { useState } from "react";
import styles from "./ReportFeed.module.css";
import ReportCard from "./ReportCard";

export default function ReportFeed({ filters }) {
  // Mock data - auto-generated from database concepts
  const mockReports = [
    {
      id: 1,
      title: "Worli Ward - Road Construction Project Initiated",
      summary:
        "Public Works Department approved ₹8.5 Cr project for complete road rehabilitation in Ward 174. Timeline: 18 months. Expected completion: March 2026.",
      type: "project_update",
      region: "Mumbai, Ward 174 (Worli)",
      department: "Public Works Department",
      impactAmount: "₹8.5 Cr",
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      source: "https://bmc.gov.in",
      sourceLabel: "BMC Official",
      confidenceLevel: "high",
    },
    {
      id: 2,
      title: "Health Department Budget Allocation: Increased by 15%",
      summary:
        "Mumbai Health Services received ₹120 Cr allocation for FY2024-25, up from ₹104 Cr. Funds directed to: new clinics (40%), equipment (35%), staff (25%).",
      type: "budget_update",
      region: "Mumbai",
      department: "Health Services",
      impactAmount: "₹120 Cr",
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      source: "https://budget.maharashtra.gov.in",
      sourceLabel: "State Budget Portal",
      confidenceLevel: "high",
    },
    {
      id: 3,
      title: "Solid Waste Management Contract Renewal Decision",
      summary:
        "BMC approved renewal of waste management contracts with 3 operators. New terms include: 5% efficiency improvement, real-time tracking via GPS, penalties for delays.",
      type: "decision",
      region: "Mumbai",
      department: "Solid Waste Management",
      impactAmount: "₹200 Cr",
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      source: "https://bmc.gov.in",
      sourceLabel: "BMC Resolution",
      confidenceLevel: "high",
    },
    {
      id: 4,
      title: "Tender Issued: Water Pipeline Repair - Eastern Suburbs",
      summary:
        "Tender notice published for replacement of aging water pipelines in 15 wards. Estimated cost: ₹45 Cr. Deadline for bids: 15 Feb 2025. Execution: 24 months.",
      type: "tender",
      region: "Mumbai (Eastern Suburbs)",
      department: "Water Supply",
      impactAmount: "₹45 Cr",
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      source: "https://bmc.gov.in/tenders",
      sourceLabel: "Tender Portal",
      confidenceLevel: "high",
    },
    {
      id: 5,
      title: "Audit Flag: School Building Maintenance - Low Confidence",
      summary:
        "Data integrity issue detected in school maintenance spending. 12 schools show inconsistent cost records. Investigation ongoing. Status: Flagged for verification.",
      type: "audit",
      region: "Mumbai, Education Department",
      department: "Education",
      publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      source: null,
      confidenceLevel: "low",
    },
    {
      id: 6,
      title: "Government Notice: New Ward Delimitation Announced",
      summary:
        "State announced new ward boundaries effective March 2025. 3 new wards created. Voter rolls being updated. Election Commission notification issued.",
      type: "notice",
      region: "Mumbai",
      publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      source: "https://maharashtra.gov.in",
      sourceLabel: "State Official",
      confidenceLevel: "high",
    },
    {
      id: 7,
      title: "Byculla Project Completion: Community Health Center",
      summary:
        "₹6.2 Cr health center officially inaugurated. 50 beds operational. Serves population of 85,000. Training for 40 staff completed.",
      type: "project_update",
      region: "Mumbai, Ward 188 (Byculla)",
      department: "Health Services",
      impactAmount: "₹6.2 Cr",
      publishedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      source: "https://bmc.gov.in",
      sourceLabel: "BMC Press",
      confidenceLevel: "high",
    },
    {
      id: 8,
      title: "Budget Spending Update: PWD 71% Utilization",
      summary:
        "Public Works Department has spent ₹320 Cr of ₹450 Cr allocation (71%). 18 major projects active. 3 projects ahead of schedule, 2 facing minor delays.",
      type: "budget_update",
      region: "Mumbai",
      department: "Public Works Department",
      impactAmount: "₹320 Cr / ₹450 Cr",
      publishedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      source: "https://bmc.gov.in/finance",
      sourceLabel: "Finance Report",
      confidenceLevel: "high",
    },
  ];

  // Filter reports based on user selections
  const filteredReports = mockReports.filter((report) => {
    if (filters.city && !report.region.includes(filters.city)) return false;
    if (filters.ward && !report.region.toLowerCase().includes(filters.ward.toLowerCase()))
      return false;
    if (filters.department && report.department !== filters.department) return false;
    return true;
  });

  return (
    <div className={styles.feedContainer}>
      <div className={styles.feedInfo}>
        <h2>Feed</h2>
        <p>
          {filteredReports.length} updates in{" "}
          <strong>
            {filters.city}
            {filters.ward && ` • Ward ${filters.ward}`}
            {filters.department && ` • ${filters.department}`}
          </strong>
        </p>
      </div>

      <div className={styles.feed}>
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => <ReportCard key={report.id} report={report} />)
        ) : (
          <div className={styles.noResults}>
            <p>📭 No updates found for your selected filters.</p>
            <p style={{ fontSize: "0.9rem", color: "#999" }}>
              Try adjusting your region, ward, or department selection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
