import { DivContainer, SecondDivContainer } from "./styles";

import logoRocketNews from "../../assets/logo.svg";
import bgImage from "../../assets/read_news.jpg";
import Send from "../../assets/send.svg";
import arrowRight from "../../assets/arrow-right.svg";

export function Home() {
  return (
    <DivContainer>
      <SecondDivContainer>
        <div className="geral-box">
          <div>
            <img className="header-img" src={logoRocketNews} />
          </div>
          <div className="text">
            <h1>atualize ideias e informações em 5 minutos.</h1>
            <p>
              tudo que você precisa saber para começar seu dia bem e informado
            </p>
            <div>
              <span>
                noticias sobre o universo Rocketseat, e tudo o que precisa para
                começar o dia melhor.
              </span>{" "}
              <br />
              <span>perfeito para se preparar para codar ☕</span>
            </div>
          </div>
          <div className="form">
            <form className="form">
              <label>Insira seu e-mail:</label>
              <div className="row">
                <input type="text" placeholder="oi@rocketseat.com"></input>
                <button>
                  <img src={Send} />
                </button>
              </div>
            </form>
          </div>
          <div className="deixeLer">
            <a href="#">
              deixe-me ler primeiro <img src={arrowRight} />
            </a>
          </div>
        </div>
      </SecondDivContainer>
      <img src={bgImage} alt="bgImage" className="bg-image" />
    </DivContainer>
  );
}
