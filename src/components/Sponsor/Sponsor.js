import classes from "./Sponsor.module.css";

import yamanImage from "../../assets/img/yaman-company.webp";
import wadhwaniImage from "../../assets/img/wadhwani-company.webp";

import Section from "../UI/Section";

const Sponsor = (props) => {
  return (
    <Section id={props.id}>
      <div className={classes.sponsor} data-aos="fade-right">
        <div>
          <img src={yamanImage} alt="Empresa Yaman" />
        </div>
        <div>
          <h3>Yaman</h3>
          <p>
            A Yaman é uma das principais consultorias de qualidade e engenharia
            de software do Brasil, especializada na entrega de aplicações
            confiáveis, seguras e rápidas para seus clientes. Em sintonia com a
            crescente evolução da era digital, o segredo do sucesso dos clientes
            da Yaman em suas jornadas digitais está na capacidade de entregar
            experiências únicas para seus clientes finais, com extrema
            velocidade de time-to-market. Para a equipe Yaman, aplicações com
            qualidade significa entregar aplicações/software seguros, negócios
            digitais estáveis e crescentes e que protejam as pessoas envolvidas
            com alta disponibilidade e com excelente usabilidade dos serviços.
          </p>
        </div>
      </div>

      <div className={classes.sponsor} data-aos="fade-left">
        <div>
          <h3>Wadhwani</h3>
          <p>
            “O programa Wadhwani no Brasil da Fundação Wadhwani tem como missão
            treinar e capacitar jovens no mercado de trabalho com as soft
            skills, as competências sócio emocionais e comportamentais que são
            tão essenciais para o mercado de trabalho. A parceria com o
            #TeuFuturo é super estratégica e excelente, pois o programa é uma
            ajuda aos jovens para que desenvolvam competências técnicas na área
            de tecnologia e competências socioemocionais pelo Job Ready, então o
            jovem ao terminar terá desenvolvido competências técnicas e
            socioemocionais. Portanto a parceria excelente, que ajuda a cumprir
            a nossa missão em ajudar jovens a chegar 100% , com toda força, no
            mercado de trabalho possibilidade os mesmos de terem carreiras
            incríveis e promissoras.”
          </p>
        </div>
        <div>
          <img src={wadhwaniImage} alt="Empresa Wadhwani" />
        </div>
      </div>

      <div className={classes.message} data-aos="fade-up">
        <h5>Faça como a Yaman e a Wadhwani e</h5>
        <h4>
          Apoie
          <a
            href="https://www.imed.edu.br/Comunicacao/Eventos/Hotsite/-teufuturo/"
            target="_blank"
            rel="noreferrer"
          >
            {" VOCÊ "}
          </a>
          também essa causa!
        </h4>
      </div>
    </Section>
  );
};

export default Sponsor;
