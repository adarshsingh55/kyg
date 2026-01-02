import React, { useState } from "react";
import styles from "./ProposalForm.module.css";

const CATEGORIES = [
  "Infrastructure",
  "Water & Sanitation",
  "Traffic & Transport",
  "Environment",
  "Education",
  "Health",
  "Cleanliness",
  "Utilities",
  "Governance",
];

const DEPARTMENTS = [
  "Public Works",
  "Water Supply",
  "Sanitation",
  "Traffic & Transport",
  "Health Services",
  "Education",
  "Environment",
  "Utilities",
];

export default function ProposalForm({ onClose, onCreate, context = {} }) {
  const [title, setTitle] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [proposedSolution, setProposedSolution] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !problemStatement.trim() || !proposedSolution.trim() || !category) {
      setError("Please fill in all required fields");
      return;
    }

    const payload = {
      title: title.trim(),
      problem_statement: problemStatement.trim(),
      proposed_solution: proposedSolution.trim(),
      category,
      department: department || null,
    };

    setSubmitting(true);
    setError("");
    try {
      await onCreate(payload);
    } catch (err) {
      setError("Failed to create proposal. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Propose an Idea</h2>
          <p className={styles.subtitle}>
            Help improve {context.city}
            {context.ward && ` • Ward ${context.ward}`}
          </p>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
            disabled={submitting}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {error && <div className={styles.errorMessage}>{error}</div>}

          {/* Title */}
          <div className={styles.formGroup}>
            <label htmlFor="title">
              Title <span className={styles.required}>*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Brief title of your proposal"
              maxLength={100}
              disabled={submitting}
            />
            <span className={styles.charCount}>{title.length}/100</span>
          </div>

          {/* Problem Statement */}
          <div className={styles.formGroup}>
            <label htmlFor="problem">
              What's the problem? <span className={styles.required}>*</span>
            </label>
            <textarea
              id="problem"
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              placeholder="Describe the issue in detail. Where is it? Since when? How does it affect you?"
              rows={5}
              maxLength={500}
              disabled={submitting}
            />
            <span className={styles.charCount}>{problemStatement.length}/500</span>
          </div>

          {/* Proposed Solution */}
          <div className={styles.formGroup}>
            <label htmlFor="solution">
              Your proposed solution <span className={styles.required}>*</span>
            </label>
            <textarea
              id="solution"
              value={proposedSolution}
              onChange={(e) => setProposedSolution(e.target.value)}
              placeholder="What should be done? List clear, realistic steps"
              rows={4}
              maxLength={400}
              disabled={submitting}
            />
            <span className={styles.charCount}>{proposedSolution.length}/400</span>
          </div>

          {/* Category */}
          <div className={styles.formGroup}>
            <label htmlFor="category">
              Category <span className={styles.required}>*</span>
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={submitting}
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div className={styles.formGroup}>
            <label htmlFor="department">
              Related Department <span className={styles.optional}>(optional)</span>
            </label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              disabled={submitting}
            >
              <option value="">Not specified</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Guidelines */}
          <div className={styles.guidelines}>
            <h4>Guidelines</h4>
            <ul>
              <li>Keep it constructive and focused on solutions</li>
              <li>No personal attacks or party politics</li>
              <li>Include specific location details (ward, area)</li>
              <li>Avoid spam or unrelated topics</li>
            </ul>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.primaryBtn}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Proposal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
