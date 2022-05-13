import React from "react";
import css from "./todo-list-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio, TasksAction } from "../../store";
import { Link } from "react-router-dom";

export const PortfolioItem = () => {
  const dispatch = useDispatch();  
  const tasks = useSelector(getPortfolio);

  const deleteTask = (id) => dispatch(TasksAction.deleteTask(id));
  const toggleTask = (id) => dispatch(TasksAction.toggleTask(id));

  return tasks.map(({ id, title, isDone }) => {
    return (
      <li className={css.todo} key={id.toString()}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => toggleTask(id)}
        />
        <span className={css.label}>{title}</span>
        <Link to={`/todo/${id}`}>More...</Link>
        {isDone && <button onClick={() => deleteTask(id)}>Delete</button>}
      </li>
    );
  });
};
