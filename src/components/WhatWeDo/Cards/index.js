import "./styles.css";
import { IoGameControllerOutline, IoArrowDown } from "react-icons/io5";
import Card from "../Card";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
function Cards() {
  const cards = [
    {
      img: img1,
      class: "text-base",
      alt: "Duas pessoas jogando em dispositivos móveis",
      text: "A <strong>PlanXP</strong> tem uma equipe qualificada para o <strong> desenvolvimento de jogos digitais</strong> para <strong> dispositivos móveis</strong> (smartphones, tablets e afins).",
    },
    {
      img: img2,
      class: "text-base",
      alt: "Pessoa jogando com um computador",
      text: "Desenvolvemos games para anunciar seus produtos e serviços, através da <strong> gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).",
    },
    {
      img: img3,
      class: "text-base",
      alt: "Homem se divertindo com jogos mobile",
      text: "Utilizando as últimas tecnologias para a <strong> criação de games</strong>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.",
    },
    {
      icon: <IoGameControllerOutline />,
      class: "text-caption",
      alt: "Controle de videogame",
      text: "Experimente inovar com a <strong> PlanXP</strong> para<strong> desenvolver os seus jogos digitais!</strong>",
      textLink: "Entre em contato agora mesmo",
      link: "#contato",
    },
  ];
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <Card key={index}>
          <div
            className="card__image"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            {card.icon}
          </div>
          <p
            className={card.class}
            dangerouslySetInnerHTML={{ __html: card.text }}
          ></p>
          {card.textLink && (
            <a className="base-link" href={card.link}>
              {card.textLink} <IoArrowDown className="arrow-bottom--sm" />
            </a>
          )}
        </Card>
      ))}
    </div>
  );
}

export default Cards;
