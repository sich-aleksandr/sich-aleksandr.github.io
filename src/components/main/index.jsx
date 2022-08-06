import React, { useEffect } from "react";
import { Carusel } from "./carusel";
import "./main.css";

export const Main = () => {
  useEffect(() => {
    document.title = "Душевный фотограф";
  }, []);

  return (
    <>
      <div className="main_img"></div>
      <h1 className="main-h1">Искренность в каждом кадре</h1>
      <div className="main-flex">
        <Carusel />

        <div className="main-content">
          <p className="main-text">
            Обращаясь ко мне, Вы получите непостановочные снимки о настоящих
            Вас: весёлых или грустных, энергичных или утомлённых, элегантных или
            забавных, но всегда очаровательных, ярких и прекрасных.
          </p>
          <p className="main-text main-text-center ">
            <b>
              Я хочу запечатлеть блеск Ваших глаз, искренность и неповторимость
              момента.
            </b>
          </p>
          <p className="main-text">
            На мой взгляд ценность Ваших неподдельных эмоций выше, чем стоимость
            платья или красота идеальной укладки. Если Вы ищите фотографа,
            который любит свою работу, ищет прекрасное в Вас и старается понять,
            что же Вы чувствуете, то мы с Вами найдем общий язык!
          </p>
          <p className="main-text main-text-center">
            <b>
              Я считаю, что композиция, свет, ракурс важны для фотографии, но Вы
              - это суть кадра, суть моей работы.
            </b>
          </p>
          <h2 className="main-h2">Вы - мое вдохновение!</h2>
        </div>
      </div>
    </>
  );
};
