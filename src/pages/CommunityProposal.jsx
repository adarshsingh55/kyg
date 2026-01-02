import React, { useState, useEffect } from "react";
import styles from "./CommunityProposal.module.css";
import ProposalForm from "../component/community/ProposalForm";
import ProposalList from "../component/community/ProposalList";

const DEPARTMENTS = [
  "Public Works",
  "Water Supply",
  "Sanitation",
  "Traffic & Transport",
  "Health",
  "Education",
  "Environment",
  "Utilities",
];

const SORT_OPTIONS = [
  { value: "recent", label: "Recent" },
  { value: "supported", label: "Most Supported" },
  { value: "discussed", label: "Most Discussed" },
];

export default function CommunityProposal() {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [context, setContext] = useState({
    state: "Maharashtra",
    city: "Mumbai",
    ward: "",
    department: "",
  });
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    fetchProposals();
  }, [context, sortBy]);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (context.state) params.append("state", context.state);
      if (context.city) params.append("city", context.city);
      if (context.ward) params.append("ward", context.ward);
      if (context.department) params.append("department", context.department);
      params.append("sort", sortBy);

      // TODO: replace with real backend endpoint
      const res = await fetch(`/api/proposals?${params}`);
      if (res.ok) {
        const data = await res.json();
        setProposals(data);
      } else {
        setProposals([]);
      }
    } catch (err) {
      console.error("Failed to load proposals", err);
      setProposals([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (payload) => {
    try {
      // Add context to payload
      const completePayload = {
        ...payload,
        region: {
          state: context.state,
          city: context.city,
          ward: context.ward,
        },
      };

      // TODO: replace with real POST endpoint
      const res = await fetch(`/api/proposals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completePayload),
      });
      if (res.ok) {
        const created = await res.json();
        // optimistic update
        setProposals((p) => [created, ...p]);
        setShowForm(false);
      } else {
        console.error("Failed to create proposal");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleContextChange = (field, value) => {
    setContext({ ...context, [field]: value });
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Community Proposals</h1>
        <p className={styles.subtitle}>
          Propose ideas, discuss solutions, and support local improvements
        </p>
      </div>

      {/* Context Bar */}
      <div className={styles.contextBar}>
        <div className={styles.contextGroup}>
          <label>State</label>
          <select
            value={context.state}
            onChange={(e) => handleContextChange("state", e.target.value)}
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>

        <div className={styles.contextGroup}>
          <label>City</label>
          <select
            value={context.city}
            onChange={(e) => handleContextChange("city", e.target.value)}
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nagpur">Nagpur</option>
          </select>
        </div>

        <div className={styles.contextGroup}>
          <label>Ward (Optional)</label>
          <input
            type="text"
            placeholder="Ward number or name"
            value={context.ward}
            onChange={(e) => handleContextChange("ward", e.target.value)}
          />
        </div>

        <div className={styles.contextGroup}>
          <label>Department (Optional)</label>
          <select
            value={context.department}
            onChange={(e) => handleContextChange("department", e.target.value)}
          >
            <option value="">All Departments</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Actions Row */}
      <div className={styles.actionsRow}>
        <div className={styles.sortGroup}>
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button className={styles.primaryButton} onClick={() => setShowForm(true)}>
          ➕ Propose an Idea
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <ProposalList proposals={proposals} loading={loading} context={context} />
      </div>

      {/* Create Proposal Modal */}
      {showForm && (
        <ProposalForm
          onClose={() => setShowForm(false)}
          onCreate={handleCreate}
          context={context}
        />
      )}
    </div>
  );
}