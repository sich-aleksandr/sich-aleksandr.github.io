import React from "react";
import "./sort-portfolio.css";
import { filterOptions } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { filterActions, getFilter, getTags } from "../../store";

export const SortPortfolio = () => {
  const dispatch = useDispatch();
  const changeFilter = ({ target }) =>
    dispatch(filterActions.changeFilter(target.value));

  const selectedFilter = useSelector(getFilter);

  const Tags = useSelector(getTags);

  return (
    <div className="sort">
      {filterOptions.map(({ id, value, label }) => {
        return (
          <button
            key={id}
            className={
              value === selectedFilter ? "sort-radio_press" : "sort-radio"
            }
            id={id}
            value={value}
            checked={value === selectedFilter}
            onClick={changeFilter}
          >
            {label}
          </button>
        );
      })}
      {Tags.map((tags, id) => {
        return (
          <button
            key={id}
            className={
              tags === selectedFilter ? "sort-radio_press" : "sort-radio"
            }
            id={id}
            value={tags}
            checked={tags === selectedFilter}
            onClick={changeFilter}
          >
            {tags}
          </button>
        );
      })}
    </div>
  );
};
