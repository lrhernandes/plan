import "./styles.css";
function Contact() {
  return (
    <div className="contact section">
      <div className="contact__form">
        <div className="heading">
          <span>05.</span>
          <p className="title--bg">/Contato</p>
        </div>
        <p className="text-base">
          Gostou de saber mais sobre as inovações tecnológicas e também quer
          oferecer novas experiências aos seus clientes? Então entre em contato
          e marque um encontro real conosco para conversamos sobre as infinitas
          possibilidades do mundo virtual.
        </p>
        <form>
          <label id="name">
            Nome:
            <div className="input--wrapper">
              <div className="fold"></div>
              <input type="text"></input>
            </div>
          </label>
          <div className="form--group">
            <label id="email">
              E-mail:
              <div className="input--wrapper">
                <div className="fold"></div>
                <input type="text"></input>
              </div>
            </label>
            <label id="phone">
              Telefone:
              <div className="input--wrapper">
                <div className="fold"></div>
                <input type="text"></input>
              </div>
            </label>
          </div>
          <label id="message">
            Mensagem:
            <div className="input--wrapper textarea">
              <div className="fold"></div>
              <textarea></textarea>
            </div>
          </label>
        </form>
      </div>
      <div className="contact__cards"></div>
    </div>
  );
}

export default Contact;
