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
    color: "white",
    width: 150,
    height: 40,
    fontSize: 16,
    fontWeight: 100,
    paddingX: 10,
    paddingY: 10,
    borderWidth: 2,
    borderColor: "darkred",
    borderRadius: 4,
    boxShadowY: 2,
    boxShadowSpread: 10,
    boxShadowX: 2,
    boxShadowColor: "rgba(0,0,0,.1)",
    buttonText: "Hello World",
    buttonClass: "button",
    containerBackground: colors[0],
  });

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Code Copied!");
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      alert("Failed to copy: " + err);
      /* Rejected - text failed to copy to the clipboard */
    }
  };

  const updateStyles = (key: string, value: string | number) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [key as keyof IStyles]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ styles, updateStyles, copyToClipboard }}>
      <GlobalStyle />
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = (): IContext => useContext(AppContext);
