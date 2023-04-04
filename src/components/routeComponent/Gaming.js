import React from "react";
import "../../css/Games.css";

const Gaming = ({ image, name, categories }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="Games img" />
        <div className="card-body">
          <h1>{name}</h1>
          <button className="card">Play Game</button>
          <p className="card-text">{categories}</p>
        </div>
      </div>
    </>
  );
};

export default Gaming;
