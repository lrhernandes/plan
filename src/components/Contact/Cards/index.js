import "./styles.css";
import { IoArrowDown, IoLocationSharp } from "react-icons/io5";
function Cards() {
  return (
    <div className="cards">
      <div>
        <p className="subtitle--md">Siga-nos</p>
        <p className="text-base">
          Fique sempre por dentro de todas as novidades da Plan XP e de todas
          empresas do Grupo Plan Marketing.
        </p>
      </div>
      <div>
        <p className="subtitle--md">
          <IoLocationSharp />
          /RS
        </p>
        <p className="text-base">
          Rua Onze de Junho, 243 <br />
          Novo Hamburgo / RS
          <br />
          Brasil
          <br />
          +55 51 98229.0400
        </p>
        <a className="base-link" href>
          VER NO GOOGLE MAPS <IoArrowDown className="arrow-bottom--sm" />
        </a>
      </div>
      <div>
        <p className="subtitle--md">
          <IoLocationSharp />
          /SP
        </p>
        <p className="text-base">
          Rua Ibijaú, 355/Sala 1309
          <br />
          São Paulo / SP
          <br />
          Brasil
          <br />
          +55 11 98871.8556
        </p>
        <a className="base-link" href>
          VER NO GOOGLE MAPS <IoArrowDown className="arrow-bottom--sm" />
        </a>
      </div>
    </div>
  );
}

export default Cards;
