import "./Player.css"
import React, { useContext, setState, useState } from "react"
import PlayerContext from "../../Contexts/PlayerContexts";


const Player = (props) => {
    const { setState, state } = useContext(PlayerContext);
    const [arma, setArma] = useState("");
    return (
        <div className="colaborador">           
            <div className="cabecalho">           
                <img id="perfil" src={"imagens/don-vito.jpg"} alt="" />
                <img id="mapa" src={`imagens/mapas/${props.mapa}.jpg`} alt="" />
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <img id="arma" src={`imagens/armas/${props.arma}.png`} alt="" />
            </div>
        </div>
    )
}

export default Player