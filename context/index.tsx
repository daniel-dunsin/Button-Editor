import { GlobalStyle } from "@/components/GlobalStyle";
import { IContext } from "@/types";
import { createContext, FC, ReactElement, useContext } from "react";

const AppContext = createContext({} as IContext);

type AppProviderProps = {
  children: ReactElement;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <GlobalStyle />
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider: IContext = () => useContext(AppContext);
