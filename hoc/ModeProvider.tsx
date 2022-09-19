import React, { useState } from "react";
import ModeContext from "../context/ModeContext";

interface ModeProviderProps {
  children: React.ReactNode;
}

const ModeProvider: React.FC<ModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<boolean>(false);

  const handleToggleMode = () => {
    setMode(!mode);
  };

  return (
    <ModeContext.Provider value={{ mode, handleToggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
