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
      {Tags.map((tags, id) => {
        return (
          <div key={id} className="sort-radio">
            <input
              name="sort"
              type="radio"
              id={id}
              value={tags}
              // checked={value === selectedFilter}
              onChange={changeFilter}
            />
            <label htmlFor={id}>{tags}</label>
          </div>
        );
      })}
    </div>
  );
};
