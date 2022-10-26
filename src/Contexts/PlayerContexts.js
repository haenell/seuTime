import React, { createContext, useState } from "react";

const Default_value = {
  state: {
    nome: "",
    funcao: "",
    arma: "",
    mapa: "",
  },
  states: [],
  setState: () => {},
};

const PlayerContext = createContext(Default_value);

const PlayerContextProvider = ({ children }) => {
  const [state, setState] = useState(Default_value.state);

  return (
    <PlayerContext.Provider value={{ state, setState }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider };

export default PlayerContext;
