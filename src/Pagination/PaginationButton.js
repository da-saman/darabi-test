import React from "react";
import "./Pagination.css";
function PaginationButton(props) {
  const clickHandler = () => {
    props.onClick(props.num);
  };
  return (
    <button className="paginationButton" onClick={clickHandler}>
      {props.num}
    </button>
  );
}

export default PaginationButton;
