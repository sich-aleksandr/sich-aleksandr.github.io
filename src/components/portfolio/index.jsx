import React from "react";
import css from "./portfolio-item.module.css";
import { useSelector } from "react-redux";
import { getPortfolio } from "../../store";
// import { Link } from "react-router-dom";

export const Portfolio = () => {
  const tasks = useSelector(getPortfolio);

  const style = (size) => {
    if (size === 'small') {
      return [css.card, css.small]
    }
    if (size === 'medium') {
      return [css.card, css.medium]
    }
    if (size === 'large') {
      return [css.card, css.large]
    }
  };

  return (
    <div className={css.container}>
      {tasks.map(({ id, title, photo, size }) => {
        return (
          <div
            className={ style(size).join(' ') }
            key={id.toString()}
            style={{
              backgroundImage: `url("${photo}")`,
            }}
          >
            {/* <span>{title}</span> */}
            {/* <Link to={`/${id}`}>More...</Link> */}
          </div>
        );
      })}
    </div>
  );
};
