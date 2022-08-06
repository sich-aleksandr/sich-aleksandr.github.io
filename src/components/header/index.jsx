import React from "react";
import { Link } from 'react-router-dom';
import css from "./header.module.css";
import { Burger, Menu } from "../burgerMenu"
import phone from "./phone.png";
import logo from "./logo.png";
import inst from "./inst.png";



export const menu = [
  { id: "/", name: "Главная" },
  { id: "portfolio", name: "Портфолио" },
  { id: "conditions", name: "Условия/Стоимость" },
];

const instagram = "https://www.instagram.com/sincere_phot0s/";


const Icon = ({src}) => {
  return (
    <img className={css.icon} src={src} alt="logo"  />
  )
}


export const Header = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className={css.header}>
      <Link to="/"><img className={css.logo} src={logo} alt="Logo" /></Link>
      <div className={css.contact}>
        <div><a className={css.contactLink} href="tel:+375296332980"><Icon className={css.icon} src={phone} /> +375 29 633 2980</a></div>
        <div><a className={css.contactLink} target="_blank" rel="noreferrer" href={instagram}><Icon  src={inst} /> sincere_phot0s</a></div>
      </div>
      <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      <nav className={css.menu}>
        <ul className={css.menu_items}>
          {menu.map(({ id, name }) => {
            return (
              <li className={css.item} key={id}>
                <Link className={css.link} key={id} to={id}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
