import React from "react";
import "./FameCard.css";
function FameCard(props) {
  const clickHandler = () => {
    if (props.onClick) {
      props.onClick(props.id);
    }
  };
  return (
    <div className="card grid-item " onClick={clickHandler}>
      <img src={props.image} alt="Avatar" className="image"></img>
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.dob}</p>
      </div>
    </div>
  );
}

export default FameCard;
