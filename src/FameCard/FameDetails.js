import React, { useEffect, useState } from "react";
import FameCard from "./FameCard";
import "./FameCard.css";
import { Client } from "../client";

import "./FameCard.css";
function FameDetails(props) {
  const [fame, setFame] = useState(null);
  useEffect(() => {
    Client.getOneFame(props.id).then(fame => {
      const theFame = JSON.parse(fame).data;
      setFame(theFame);
    });
  }, []);
  const clickHandler = id => {
    props.onBack(id);
  };
  return (
    <div className="detailsContainer">
      {fame && (
        <FameCard
          id={fame.id}
          image={fame.image}
          name={fame.name}
          dob={fame.dob}
        ></FameCard>
      )}
      <button className="backButton" onClick={clickHandler}>
        Go Back
      </button>
    </div>
  );
}

export default FameDetails;
