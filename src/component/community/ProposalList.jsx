import React from "react";
import ProposalCard from "./ProposalCard";
import styles from "./ProposalList.module.css";

export default function ProposalList({ proposals = [], loading = false, context = {} }) {
  const handleOpenProposal = (proposalId) => {
    // TODO: Route to proposal detail page
    console.log("Opening proposal:", proposalId);
    // navigate(`/community/proposal/${proposalId}`);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading proposals...</p>
      </div>
    );
  }

  if (!proposals || proposals.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>💡</div>
        <h3>No proposals yet in this area</h3>
        <p>
          Be the first to propose an improvement for{" "}
          <strong>
            {context.city}
            {context.ward && ` • Ward ${context.ward}`}
          </strong>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <h2>{proposals.length} proposals</h2>
        <p>
          For <strong>{context.city}</strong>
          {context.ward && ` • Ward ${context.ward}`}
          {context.department && ` • ${context.department}`}
        </p>
      </div>

      <div className={styles.cards}>
        {proposals.map((p) => (
          <ProposalCard 
            key={p._id || p.id} 
            proposal={p} 
            onOpen={handleOpenProposal}
          />
        ))}
      </div>
    </div>
  );
}
