import "./Player.css";
import React from "react";

const Player = (props) => {
  return (
    <div className="player">
      <div className="cabecalho">
        <img
          id="perfil"
          src={`https://github.com/${props.imagem}.png`}
          alt={props.nome}
        />
        <img
          id="mapa"
          src={`imagens/mapas/${props.mapa}.jpg`}
          alt={props.mapa}
        />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <img id="arma" src={`imagens/armas/${props.arma}.png`} alt="" />
      </div>
    </div>
  );
};

export default Player;
