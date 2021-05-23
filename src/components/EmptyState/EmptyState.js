import React from "react";
import "./EmptyState.css";

function EmptyState() {
  return (
    <section className="empty">
      <div className="empty__icon" />
      <p className="empty__text">Repository list is empty</p>
    </section>
  );
}

export default EmptyState;
