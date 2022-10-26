import React from "react";

import { PlayerContextProvider } from "./PlayerContexts";
import { TeamContextProvider } from "./TeamContext";

const GlobalContext = ({ children }) => {
  return (
    <TeamContextProvider>
      <PlayerContextProvider>{children}</PlayerContextProvider>
    </TeamContextProvider>
  );
};

export default GlobalContext;
