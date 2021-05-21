import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <section className="card">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="card__title"
      >
        {props.title}
      </a>
      <p className="card__description">{props.description}</p>
    </section>
  );
}

export default Card;
