import React, { useState, useEffect } from "react";
import css from "./portfolio-item.module.css";
import { useSelector } from "react-redux";
import { getPortfolio } from "../../store";
import { Spinner } from "../commons/spinner";
import { Image } from "antd";

export const Portfolio = () => {
  const portfolio = useSelector(getPortfolio);

  useEffect(() => {
    document.title = "Портфолио";
  }, []);

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
          <Image.PreviewGroup>
            {portfolio.map(({ id, title, photo, photoBig, size }) => {
              return (
                <Image
                preview={{
                  src: `${photoBig}`,
                  mask: <Mask />,
                }}
                  key={id}
                  rootClassName={style(size).join(" ")}
                  alt={title}
                  width={"auto"}
                  height={"auto"}
                  src={photo}
                />
              );
            })}
          </Image.PreviewGroup>
        </div>
      )}
    </>
  );
};

const Mask = () => {
  return (
    <div class="ant-image-mask-info">
      <span role="img" aria-label="eye" class="anticon anticon-eye">
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="eye"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
        </svg>
      </span>
      Увеличить
    </div>
  );
};
