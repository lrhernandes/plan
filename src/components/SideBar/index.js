import "./styles.css";
import logo from "../../assets/logo.png";

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
          <li key={item.id} className="sidebar__list__item">
            <span>0{item.id}.</span>
            <h1>/{item.title}</h1>
          </li>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
