import { useAppProvider } from "@/context";
import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = () => {
  const { styles } = useAppProvider();
  return <ButtonStyled styles={styles}>{styles.buttonText}</ButtonStyled>;
};

export default Button;
