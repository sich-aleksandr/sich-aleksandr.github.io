import React from "react";
import css from "./header.module.css";
import logo from "./logo.jpg";
import { Link } from 'react-router-dom';

const menu = [
  { id: "/", name: "Главная" },
  { id: "portfolio", name: "Портфолио" },
  { id: "contacts", name: "Контакты" },
];

export const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/"><img className={css.logo} src={logo} alt="Logo" /></Link>
      <h2>sincere_phot0s</h2>
      <nav className={css.menu}>
        <ul className={css.menu_items}>
          {menu.map(({ id, name }) => {
            return (
              <li className={css.item} key={id}>
                <Link className={css.link} to={id}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
