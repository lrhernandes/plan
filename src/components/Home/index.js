import "./styles.css";
import WhatWeDo from "../WhatWeDo";
import PlanNews from "../PlanNews";
import Contact from "../Contact";
function Home() {
  return (
    <div className="home">
      <WhatWeDo id="o-que-fazemos" />
      <PlanNews id="plan-news" />
      <Contact id="contact" />
    </div>
  );
}

export default Home;
