import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <section className="card">
      <h3 className="card__title">{props.title}</h3>
      <p className="card__description">{props.description}</p>
    </section>
  );
}

export default Card;
