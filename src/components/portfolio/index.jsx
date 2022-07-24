import React, { useState, useEffect } from "react";
import css from "./portfolio-item.module.css";
import { useSelector } from "react-redux";
import { getPortfolio } from "../../store";
import { Spinner } from "../commons/spinner";
import { LightBox } from "../commons/lightBox";

export const Portfolio = () => {
  const portfolio = useSelector(getPortfolio);

  const style = (size) => {
    if (size === "small") {
      return [css.card, css.small];
    }
    if (size === "medium") {
      return [css.card, css.medium];
    }
    if (size === "large") {
      return [css.card, css.large];
    }
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, [portfolio]);

  useEffect(() => {
    setLoaded(true);
  }, [portfolio]);

  return (
    <>
      {!loaded ? (
        <Spinner />
      ) : (
        <div className={css.container}>
          {portfolio.map(({ id, title, photo, size }) => {
            return (
              <LightBox
                src={photo}
                alt={title}
                key={id.toString()}
                className={style(size).join(" ")}
                style={{
                  backgroundImage: `url("${photo}")`,
                }}
              >
                {/* <span>{title}</span> */}
                {/* <Link to={`/${id}`}>More...</Link> */}
              </LightBox>
            );
          })}
        </div>
      )}
    </>
  );
};
