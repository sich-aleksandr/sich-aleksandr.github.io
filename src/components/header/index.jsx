import React from "react";
import css from "./header.module.css";
import logo from "./logo.jpg";

const menu = [
  { id: 1, name: "Главная" },
  { id: 2, name: "Портфолио" },
  { id: 3, name: "Контакты" },
];

export const Header = () => {
  return (
    <div className={css.header}>
      <img className={css.logo} src={logo} alt="Logo" />
      <h2>sincere_phot0s</h2>
      <nav className={css.menu}>
        <ul className={css.menu_items}>
          {menu.map(({ id, name }) => {
            return (
              <li className={css.item} key={id}>
                <a href="#">{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
