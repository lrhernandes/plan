import "./styles.css";
import Card from "./WhatWeDoCard";
function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div>
        <div className="heading">
          <span>02.</span>
          <p className="title--md">/O que fazemos</p>
          <p className="title--bg">/Games</p>
        </div>
        <p className="subtitle--md">Desenvolvimento de games digitais.</p>
        <p className="subtitle--sm">
          Empresa especialista em desenvolvimento games digitais e gamificação.
        </p>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          ultricies sollicitudin. Cras vehicula congue odio, quis lobortis leo
          gravida non. In ornare erat tortor, mattis sodales leo efficitur at.
          In hac habitasse platea dictumst. Quisque ante tortor, egestas a lorem
          a, tempor lacinia nisi.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default WhatWeDo;
