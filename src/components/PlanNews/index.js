import "./styles.css";
import { IoArrowDown } from "react-icons/io5";
import Cards from "./Cards";
function PlanNews() {
  return (
    <div className="plan-news section">
      <div className="header">
        <div className="heading">
          <span>03.</span>
          <p className="title--md">/Plan news</p>
          <p className="title--bg">/Cases Games</p>
        </div>
        <a className="base-link" href="#blog">
          CLique aquipara ver todo o blog{" "}
          <IoArrowDown className="arrow-bottom--sm" />
        </a>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default PlanNews;
