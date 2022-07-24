import React from "react";
import { LiveCarusel } from "./live-carusel";
import css from "./conditions.module.css";
import { portfolio } from "../../store/portfolioSlice/imeges";

export const allConditions = [
  {
    id: "0",
    img: portfolio.tasks[1].photo,
    name: "Индивидуальная",
    description: "",
    photoCount: "25+",
    time: "1-1.5 часа",
    price: "35р",
  },
  {
    id: "1",
    img: portfolio.tasks[1].photo,
    name: "Love story",
    description: "",
    photoCount: "35+",
    time: "1-2 часа",
    price: "45р",
  },
  {
    id: "2",
    img: portfolio.tasks[1].photo,
    name: "Семейная",
    description: "",
    photoCount: "40+",
    time: "1.5-2.5 часа",
    price: "55р",
  },
  {
    id: "3",
    img: portfolio.tasks[1].photo,
    name: "Семейная расширенная",
    description: "5 и более членов семьи",
    photoCount: "50+",
    time: "1.5-3 часа",
    price: "65р",
  },
  {
    id: "4",
    img: portfolio.tasks[1].photo,
    name: "Съёмка события или торжества",
    description: "",
    photoCount: "75+",
    time: "2-4 часа",
    price: "125р",
  },
];

export const Conditions = () => {
  return (
    <div className={css.conditions}>
      <LiveCarusel />
      {allConditions.map(
        ({ id, img, name, description, photoCount, time, price }) => {
          if (id % 2 === 0) {
            return (
              <div key={id} className={css.container}>
                <img className={css.img} alt="" src={img} />
                <div className={css.description}>
                  <h2 className={css.h2}>{name}</h2>
                  <span className={css.descr}>{description}</span>
                  <p><b>Фотографий: </b>{photoCount}</p>
                  <p><b>Продолжительность: </b>{time} </p>
                  <p><b>Цена: </b>{price}</p>
                </div>
              </div>
            );
          } else
            return (
              <div key={id} className={css.container}>
                <div className={css.description}>
                <h2 className={css.h2}>{name}</h2>
                  <span className={css.descr}>{description}</span>
                  <p><b>Фотографий: </b>{photoCount}</p>
                  <p><b>Продолжительность: </b>{time} </p>
                  <p><b>Цена: </b>{price}</p>
                </div>
                <img className={css.img} alt="" src={img} />
              </div>
            );
        }
      )}
      <div className={css.h2}> Если в перечне нет интересующего Вас вида съёмки, напишите или позвоните мне, мы сможем все обсудить. </div>
    </div>
  );
};
