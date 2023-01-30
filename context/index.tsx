import { GlobalStyle } from "@/components/GlobalStyle";
import { IContext } from "@/types";
import { createContext, FC, ReactElement, useContext, useState } from "react";

const AppContext = createContext({} as IContext);

type AppProviderProps = {
  children: ReactElement;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const openNavbar = () => {
    setNavbarOpen(true);
  };
  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <AppContext.Provider value={{ openNavbar, closeNavbar, navbarOpen }}>
      <GlobalStyle />
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = (): IContext => useContext(AppContext);
