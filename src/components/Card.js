import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-dark-gray dib  br3  pa1  ma2 tarjeta">
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <h4>Email: {email}</h4>
    </div>
  );
};

export default Card;
