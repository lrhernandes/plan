import "./styles.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { IoArrowDown, IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function SideBar() {
  const menu = [
    {
      id: 1,
      title: "Quem somos",
    },
    {
      id: 2,
      title: "O que fazemos",
    },
    {
      id: 3,
      title: "Plan news",
    },
    {
      id: 4,
      title: "Nossos clientes",
    },
    {
      id: 5,
      title: "Contato",
    },
  ];
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sidebar">
      <img className="sidebar__logo" alt="Plan logo" src={logo} />
      <div
        className={showMenu ? "active sidebar__list" : "disable sidebar__list"}
      >
        <div>
          {menu.map((item) => (
            <li key={item.id}>
              <span>0{item.id}.</span>
              <h1>/{item.title}</h1>
            </li>
          ))}
        </div>
        <div className="sidebar__footer">
          <li>
            <span>;&#41;</span>
            <h1>Que tal inovar com a gente?</h1>
          </li>
          <IoArrowDown className="arrow-bottom--md" />
        </div>
      </div>
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="sidebar__hamburguer">
          {!showMenu && <GiHamburgerMenu />}
          {showMenu && <IoCloseOutline />}
        </div>
      </button>
    </div>
  );
}

export default SideBar;
