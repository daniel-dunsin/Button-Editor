import { GlobalStyle } from "@/components/GlobalStyle";
import { colors } from "@/static/colors";
import { IContext, IStyles } from "@/types";
import { createContext, FC, ReactElement, useContext, useState } from "react";

const AppContext = createContext({} as IContext);

type AppProviderProps = {
  children: ReactElement;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [styles, setStyles] = useState<IStyles>({
    backgroundColor: "orange",
    color: "",
    fontSize: "",
    fontWeight: 100,
    paddingX: 0,
    paddingY: 0,
    boderWidth: 0,
    borderColor: "",
    borderRadius: 0,
    boxShadowY: 0,
    boxShadowSpread: 0,
    boxShadowX: 0,
    boxShadowColor: "",
    buttonText: "",
    containerBackground: colors[0],
  });

  const updateStyles = (key: string, value: string | number) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [key as keyof IStyles]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ styles, updateStyles }}>
      <GlobalStyle />
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = (): IContext => useContext(AppContext);
