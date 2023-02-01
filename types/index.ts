export type IContext = {
    styles: IStyles;
    updateStyles: (key:string, value: string|number)=> void;
    copyToClipboard: (value: string)=> void;
};

export type IStyles = {
    backgroundColor: string;
    color: string;
    fontSize: number;
    width: number;
    height: number;
    fontWeight: 100|200|300|400|500|600|700;
    paddingX: number;
    paddingY: number;
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
    boxShadowY: number;
    boxShadowSpread: number;
    boxShadowX:  number;
    boxShadowColor: string;
    buttonText: string;
    buttonClass: string;
    containerBackground: string;
}