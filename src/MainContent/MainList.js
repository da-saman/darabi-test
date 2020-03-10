import React, { useState, useEffect } from "react";
import PaginationButtonList from "../Pagination/PaginationButtonList";
import FameList from "../FameCard/FameList";
import { Client } from "../client";
import "./MainContent.css";
function MainList(props) {
  const [fameList, setFameList] = useState(null);
  const [page, setPage] = useState(0);
  useEffect(() => getFames(page), [page]);

  const buttonClickHandler = num => {
    setPage(num);
  };

  const selectHandler = id => {
    props.onSelect(id);
  };

  const getFames = num => {
    Client.getFames(num).then(fames => {
      const famesList = JSON.parse(fames).data;
      setFameList(famesList.list);
    });
  };
  return (
    <div>
      <FameList list={fameList} onSelect={selectHandler} />
      <PaginationButtonList buttonNum={2} onClick={buttonClickHandler} />
    </div>
  );
}

export default MainList;
