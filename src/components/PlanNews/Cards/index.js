import "./styles.css";
import { IoArrowDown } from "react-icons/io5";
import ska from "../../../assets/ska.png";
import killing from "../../../assets/killing.png";
import cargo from "../../../assets/cargo.png";
import xalingo from "../../../assets/xalingo.png";
import aromatic from "../../../assets/aromativ.png";
import glasses from "../../../assets/glasses.svg";
function Cards() {
  const cards = [
    {
      img: ska,
      tag: "SKA",
      title: "Plan cria o novo site da SKA",
      text: "Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...",
    },
    {
      img: killing,
      tag: "TINTAS KILLING",
      title: "Plan cria o novo site da Tintas Killing",
      text: "Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...",
    },
    {
      img: cargo,
      tag: "CARGO BR",
      title: "Estamos desenvolvendo o novo site da CargoBR",
      text: "Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...",
    },
    {
      img: xalingo,
      tag: "XALINGO",
      title: "Clubinho Xalingo com novidades",
      text: "Curabitur vitae tellus volutpat, imperdiet est nec, efficitur mi. Cras pellentesque ultricies diam at dictum. Cras pellentesque...",
    },
    {
      img: aromatic,
      tag: "AROMATIC",
      title: "Novo site da Aromatic no ar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, at consectetur consectetur  lorem viverra...",
    },
  ];
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card__image">
            <img
              alt="Ícone óculos de realidade aumentada"
              className="glasses"
              src={glasses}
            />
            <div className="fold"></div>
            <img src={card.img} alt={card.tag} />
          </div>
          <div className="card__description">
            <div className="tag">{card.tag}</div>
            <p className="subtitle--md">{card.title}</p>
            <p className="text--sm">{card.text}</p>
            <a className="base-link" href>
              SAIBA MAIS <IoArrowDown className="arrow-bottom--sm" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
