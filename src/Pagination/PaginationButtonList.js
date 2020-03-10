import React from "react";
import PaginationButton from "./PaginationButton";
import "./Pagination.css";
function PaginationButtonList(props) {
  const clickHandler = num => {
    props.onClick(num);
  };
  const buttonArray = [];
  for (let index = 0; index < props.buttonNum; index++) {
    buttonArray.push(<PaginationButton num={index} onClick={clickHandler} />);
  }
  return <div className="buttonList">{buttonArray}</div>;
}

export default PaginationButtonList;
