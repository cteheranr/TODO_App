import "./todoSearch.css";
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
  return (
    <>
      <div className="content-search">
        <p className="label">Buscar TODO</p>
        <input
          className="search-input"
          placeholder="Terminar el proyecto"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
        />
      </div>
    </>
  );
}

export { TodoSearch };
