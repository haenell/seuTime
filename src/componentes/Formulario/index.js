import { useState, useContext } from "react"
import PlayerContext from "../../Contexts/PlayerContexts"
import TeamContext from "../../Contexts/TeamContext"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"


const Formulario = (props) =>{

    const funcoes = [
        "",
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ]

    const mapas = [
        "",
        "Bind",
        "Ascent",
        "Pearl",
        "Fracture",
        "Haven",
        "Icebox",
        "Breeze"
    ]

    const armas = [
        "",
        "Vandal",
        "Phantom",
        "Operator",
        "Sheriff",
        "Judge"
    ]

    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [funcao, setFuncao] = useState("")
    const [mapa, setMapa] = useState("")
    const [arma, setArma] = useState("")
    const [team, setTeam] = useState([])
    const {setState: setGlobalState} = useContext(PlayerContext);
    const {setState: setTeamState} = useContext(TeamContext);

    function onSubmit (){      
        setGlobalState({nome, funcao, arma, mapa, imagem});
        console.log(imagem);
       
        props.setTeamState({
            nome,
            funcao,
            mapa,
            arma,
            imagem
        })
    }

    function salvar(e){
        console.log(e.target.value)
        setImagem(e.target.value)
    }

    const aoSalvar= (event) => {
        event.preventDefault() 
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Fill in the player's information:</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    placeholder = "Player's name" 
                    label = "Name"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />   
                <ListaSuspensa 
                    obrigatorio = {true} 
                    itens = {funcoes} 
                    label = "Main function"
                    valor = {funcao}
                    aoAlterado = {valor =>setFuncao(valor)}
                />                 
                <ListaSuspensa 
                    obrigatorio = {true} 
                    itens = {mapas} 
                    label = "Favorite map"
                    valor = {mapa}
                    aoAlterado = {valor =>setMapa(valor)}

                />                 
                <ListaSuspensa 
                    obrigatorio = {true} 
                    itens = {armas} 
                    label = "Favorite gun"
                    valor = {arma}
                    aoAlterado = {valor =>setArma(valor)}
                />                 
                <CampoTexto 
                    obrigatorio = {true} 
                    placeholder = "your GitHub profile" 
                    label = "GitHub Profile"
                    valor = {imagem}                   
                    aoAlterado = {valor => setImagem(valor)}                    
                />   
                <Botao onClick={onSubmit}>Create player card</Botao>
            </form>
        </section>
    )
}

export default Formulario