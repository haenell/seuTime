import React, { createContext, useState } from "react";

const Default_value = {
    
    team: [],
    setTeam: () => {},
}

const TeamContext = createContext(Default_value);

const TeamContextProvider = ({children}) => {
    const [state, setState] = useState(Default_value.team);

    return (<TeamContext.Provider value={{state, setState}}>{children}</TeamContext.Provider>);
}

export { TeamContextProvider };

export default TeamContext;