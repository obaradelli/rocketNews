import { DivContainer, SecondDivContainer } from "./styles";

import LogoRocketNews from "../../assets/logo.svg";
import Send from "../../assets/send.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import BgImage from "../../assets/read_news.jpg";

export function Home() {
  return (
    <DivContainer>
      <SecondDivContainer>
        <div className="geral-box">
          <div>
            <img className="header-img" src={LogoRocketNews} />
          </div>
          <div className="texts">
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
              <div className="divRow">
                <input type="text" placeholder="oi@rocketseat.com"></input>
                <button>
                  <img src={Send} />
                </button>
              </div>
            </form>
          </div>
          <div className="letMeRead">
            <a href="#">
              deixe-me ler primeiro <img src={ArrowRight} />
            </a>
          </div>
        </div>
      </SecondDivContainer>
      <img src={BgImage} alt="bgImage" className="bg-image" />
    </DivContainer>
  );
}
