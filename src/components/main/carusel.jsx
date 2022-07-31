import React, { useRef } from "react";
import { Carousel } from "antd";
import "./main.css";
import { portfolio } from "../../store/portfolioSlice/imeges";
const contentStyle = {
  height: "auto",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const Carusel = () => {
  
  const slider = useRef(null);

  return (
    <div className="carusel-main">
      <div className="carusel-container">
        {/* <button className="button-next" onClick={() => slider.current.prev()}>next</button> */}
        <Carousel ref={slider} autoplay>
          <div>
            <img
              style={contentStyle}
              alt="Carousel-slide_1"
              src={portfolio.tasks[33].photo}
            />
          </div>
          <div>
            <img
              style={contentStyle}
              alt="Carousel-slide_2"
              src={portfolio.tasks[7].photo}
            />
          </div>
          <div>
            <img
              style={contentStyle}
              alt="Carousel-slide_3"
              src={portfolio.tasks[17].photo}
            />
          </div>
        </Carousel>
        {/* <button className="button-prev" onClick={() => slider.current.next()}>prev</button> */}
      </div>
    </div>
  );
};
