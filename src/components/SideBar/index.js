import "./styles.css";
import logo from "../../assets/logo.png";
import { IoArrowDown } from "react-icons/io5";
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
  return (
    <div className="sidebar">
      <img className="sidebar__logo" alt="Plan logo" src={logo} />
      <div className="sidebar__list">
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
      <div className="sidebar__hamburguer">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default SideBar;
