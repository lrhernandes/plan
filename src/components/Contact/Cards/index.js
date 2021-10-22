import "./styles.css";
import {
  IoArrowDown,
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import planMarcketing from "../../../assets/plan.png";
import planLogo from "../../../assets/logo.png";
import fullUp from "../../../assets/fullup.png";
function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <p className="subtitle--md">Siga-nos</p>
        <p className="text-base">
          Fique sempre por dentro de todas as novidades da Plan XP e de todas
          empresas do Grupo Plan Marketing.
        </p>
        <div className="icons-wrapper">
          <IoLogoFacebook size={25} />
          <IoLogoInstagram size={25} />
          <IoLogoYoutube size={25} />
        </div>
      </div>
      <div className="card">
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
      <div className="card">
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
      <div className="card">
        <img src={planMarcketing} alt="Logo da Plan Marketing" />
        <p className="text-base">
          A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação
          completo.
        </p>
        <a className="base-link" href>
          CONHEÇA <IoArrowDown className="arrow-bottom--sm" />
        </a>
      </div>
      <div className="card">
        <img src={planLogo} alt="Logo da Plan" />
        <p className="text-base">
          A Plan XP é especializada em realidade virtual, realidade aumentada e
          jogos.
        </p>
        <a className="base-link" href>
          CONHEÇA <IoArrowDown className="arrow-bottom--sm" />
        </a>
      </div>
      <div className="card">
        <img src={fullUp} alt="Logo da FullUp" />
        <p className="text-base">
          A FullUp é uma agência especializada em branding, design e campanhas.
        </p>
        <a className="base-link" href>
          CONHEÇA <IoArrowDown className="arrow-bottom--sm" />
        </a>
      </div>
    </div>
  );
}

export default Cards;
