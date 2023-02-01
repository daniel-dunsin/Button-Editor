import { IStyles } from "@/types";
import styled from "styled-components";

type ButtonProps = {
  styles: IStyles;
};

export const ButtonStyled: any = styled.button`
  all: unset;
  width: ${({ styles }: ButtonProps) => styles.width + "px"};
  height: ${({ styles }: ButtonProps) => styles.height + "px"};
  border: ${({ styles }: ButtonProps) => styles.borderWidth + "px"} solid
    ${({ styles }: ButtonProps) => styles.borderColor};
  box-shadow: ${({ styles }: ButtonProps) => styles.boxShadowX + "px"} ${({ styles }: ButtonProps) => styles.boxShadowY + "px"} ${({ styles }: ButtonProps) => styles.boxShadowSpread + "px"} ${({ styles }: ButtonProps) => styles.boxShadowColor};

  background-color: ${({ styles }: ButtonProps) => styles.backgroundColor};
  color: ${({ styles }: ButtonProps) => styles.color};
  text-align: center;
  font-size: ${({styles}: ButtonProps)=> styles.fontSize + "px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ styles }: ButtonProps) => styles.borderRadius + "px"};
  padding-left: ${({styles}:ButtonProps)=> styles.paddingX + "px"};
  padding-right: ${({styles}:ButtonProps)=> styles.paddingX + "px"};
  padding-top: ${({styles}:ButtonProps)=> styles.paddingY + "px"};
  padding-bottom: ${({styles}:ButtonProps)=> styles.paddingY + "px"};
  font-weight: ${({styles}:ButtonProps)=> styles.fontWeight};

`;
