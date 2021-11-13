import classes from "./BannerExplorer.module.css";
import React from "react";

function BannerExplorer(props) {
  return (
    <div
      className={`${classes.explore} ${props.className ? props.className : ""}`}
    >
      <h2>ROLE A PÁGINA E SAIBA MAIS SOBRE O</h2>
      <h1>Programa #TeuFuturo!</h1>
      <p>
        O projeto visa dar aquele "empurrãozinho" em jovens interessados na
        carreira de Ciência da Computação, com módulos comportamentais e
        técnicos que ajudarão tanto o adolescente se sair bem em uma entrevista
        de emprego quanto desenvolver aplicações modernas com as tecnologias da
        web.
      </p>
      <a href="#sobre">Bora Lá!</a>
    </div>
  );
}

export default BannerExplorer;
