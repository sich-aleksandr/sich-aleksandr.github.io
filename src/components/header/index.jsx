import React from "react";
import css from './header.module.css'

const menu = [
  { id: 1, name: "Главная" },
  { id: 2, name: "Портфолио" },
  { id: 3, name: "Контакты" },
];

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>Logo</div>
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
