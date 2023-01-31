export type IContext = {
    styles: IStyles;
    updateStyles: (key:string, value: string|number)=> void;
};

export type IStyles = {
    backgroundColor: string;
    color: string;
    fontSize: string;
    fontWeight: 100|200|300|400|500|600|700;
    paddingX: number;
    paddingY: number;
    boderWidth: number;
    borderColor: string;
    borderRadius: number;
    boxShadowY: number;
    boxShadowSpread: number;
    boxShadowX:  number;
    boxShadowColor: string;
    buttonText: string;
    containerBackground: string;
}