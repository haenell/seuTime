import Player from "../Player"
import "./Funcao.css"

const Funcao = (props) => {
    
    const css = { backgroundColor: props.corPrimaria, visibility: props.nome != "" ? "visible" : "hidden" }

    return (      
        <section className="funcao" style={css}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.funcao}</h3>
            <Player nome={props.nome} arma={props.arma} mapa={props.mapa}/>
        </section>
    )
}

export default Funcao