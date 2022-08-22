import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Funcao from './componentes/Funcao';
import GlobalContext from './Contexts/GlobalContext';

function App() {

  const funcoes = [
    {
        nome: "Duelist",
        corPrimaria: "#D02090",
        corSecundaria: "#DDA0DD"
    },
    {
        nome: "Sentinel",
        corPrimaria: "#FFD700",
        corSecundaria: "#FFFFE0"
    },
    {
        nome: "Initiator",
        corPrimaria: "#0000FF",
        corSecundaria: "#6495ED"
    },
    {
        nome: "Controller",
        corPrimaria: "#006400",
        corSecundaria: "#66CDAA"
    }
]

function getTheme(funcao) {
    switch (funcao) {
        case "Duelist":
            return funcoes[0].corPrimaria;
        case "Sentinel":
            return funcoes[1].corPrimaria;
        case "Initiator":
            return funcoes[2].corPrimaria;
        case "Controller":
            return funcoes[3].corPrimaria;           
        default:
            return "#00ff00"           
    }
}

function getSecondaryTheme(funcao) {
    switch (funcao) {
        case "Duelist":
            return funcoes[0].corSecundaria;
        case "Sentinel":
            return funcoes[1].corSecundaria;
        case "Initiator":
            return funcoes[2].corSecundaria;
        case "Controller":
            return funcoes[3].corSecundaria;
        default:
            return "#00ff00"
    }
}

const[players, setPlayers] = useState([])
const novoJogadorAdicionado = (player) =>{
  setPlayers([...players, player]);
}

  return (
    <div className="App">
      <GlobalContext>
        <Formulario setTeamState={player => novoJogadorAdicionado(player)}/>
       
        {players.map((e, index) => <Funcao key={index} corPrimaria={getSecondaryTheme(e.funcao)} funcao={e.funcao} corSecundaria={getTheme(e.funcao)} nome={e.nome} mapa={e.mapa} arma={e.arma}/>)}
                
      </GlobalContext>
    </div>
  );
}

export default App;
