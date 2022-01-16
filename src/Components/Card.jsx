import React from "react";

function Card(props) {
  return (
    <div className="card">
      <p>{props.emoji}</p>
      <h2>{props.name}</h2>
      <h4>{props.meaning}</h4>
    </div>
  );
}

export default Card;
