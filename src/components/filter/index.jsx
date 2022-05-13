import React from "react";
import "./sort-todo.css";
import { filterOptions } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { filterActions, getFilter } from "../../store";

export const SortPortfolio = () => {
  const dispatch = useDispatch();
  const changeFilter = ({ target }) =>
    dispatch(filterActions.changeFilter(target.value));

  const selectedFilter = useSelector(getFilter);

  return (
    <div className="sort">
      {filterOptions.map(({ id, value, label }) => {
        return (
          <div key={id} className="sort-radio">
            <input
              name="sort"
              type="radio"
              id={id}
              value={value}
              checked={value === selectedFilter}
              onChange={changeFilter}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
    </div>
  );
};

