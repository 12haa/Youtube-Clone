import { createContext, Dispatch, SetStateAction } from "react";

type AppContextType = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
  showNav: false,
  setShowNav: () => {},
});
export default AppContext;
