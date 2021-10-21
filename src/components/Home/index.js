import "./styles.css";
import WhatWeDo from "../WhatWeDo";
import PlanNews from "../PlanNews";
import Contact from "../Contact";
function Home() {
  return (
    <div className="home">
      <WhatWeDo />
      <PlanNews />
      <Contact />
    </div>
  );
}

export default Home;
