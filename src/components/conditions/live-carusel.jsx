import React from "react";
import { portfolio } from "../../store/portfolioSlice/imeges";
import InfiniteCarousel from "react-leaf-carousel";

export const LiveCarusel = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={false}
      autoCycle={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      <div>
        <img
          alt=""
          src={portfolio.tasks[0].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[4].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[11].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[16].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[12].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[11].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[19].photo}
        />
      </div>
      <div>
        <img
          alt=""
          src={portfolio.tasks[21].photo}
        />
      </div>
    </InfiniteCarousel>
  );
};
