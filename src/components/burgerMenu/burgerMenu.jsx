import React from "react";
import { Link } from "react-router-dom";
import css from "../header/header.module.css";
import styled from "styled-components";
import { menu } from "../header";

const StyledMenu = styled.nav`
    display: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  @media (max-width: 576px) {
    width: 100%;
    /* display: flex; */
    /* display: none; */
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export const Menu = ({ open, setOpen }) => {
  const handlerClick = () => {
    setOpen(false);
  };

  return (
    <StyledMenu open={open}>
      {menu.map(({ id, name }) => {
        return (
          <Link className={css.link} onClick={handlerClick} to={id}>
            {name}
          </Link>
        );
      })}
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  display: none;

  @media (max-width: 767px) {
    position: absolute;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#212122")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

// const App = () => {
//   const [open, setOpen] = React.useState(false);
//   const node = React.useRef();
//   return (
//     <div>
//       <div>
//         <h1>Hello. This is burger menu tutorial</h1>
//         <img
//           src="https://image.flaticon.com/icons/svg/2016/2016012.svg"
//           alt="burger icon"
//         />
//         <small>
//           Icon made by <a href="https://www.freepik.com/home">Freepik</a> from{" "}
//           <a href="https://www.flaticon.com">www.flaticon.com</a>
//         </small>
//       </div>
//       <div ref={node}>
//         <Burger open={open} setOpen={setOpen} />
//         <Menu open={open} setOpen={setOpen} />
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('app'));

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = (event) => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener("mousedown", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//     };
//   }, [ref, handler]);
// };
