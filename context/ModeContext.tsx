import { createContext } from "react";

interface ModeContextInterface {
  mode: boolean;
  handleToggleMode: () => void;
}

const ModeContext = createContext<ModeContextInterface>({
  mode: false,
  handleToggleMode: () => {},
});

export default ModeContext;
