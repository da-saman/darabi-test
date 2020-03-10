import React from "react";
import FameCard from "./FameCard";
import { Client } from "../client";

import "./FameCard.css";
function FameList(props) {
  const clickHandler = id => {
    // Client.getOneFame(id).then(fames => {
    //   const famesList = JSON.parse(fames).data;
    //   console.log(famesList);
    // });
    props.onSelect(id);
  };
  return (
    <div className={"grid-container"}>
      {props.list &&
        props.list.map(element => {
          return (
            <FameCard
              key={element.id}
              id={element.id}
              image={element.image}
              name={element.name}
              dob={element.dob}
              onClick={clickHandler}
            ></FameCard>
          );
        })}
    </div>
  );
}

export default FameList;
