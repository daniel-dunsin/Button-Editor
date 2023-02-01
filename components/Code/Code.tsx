import { useAppProvider } from "@/context";
import React, { useRef } from "react";
import { CodeStyled } from "./Code.styled";

const CodeContainer = () => {
  const { styles, copyToClipboard } = useAppProvider();
  const refContainer: any = useRef({});
  const copyCodeToClipboard = () => {
    copyToClipboard(refContainer.current.textContent);
  };
  return (
    <CodeStyled>
      <header className="header">CSS Code</header>
      <main ref={refContainer as any}>
        <h1 className="class">.container {"{"}</h1>
        <div className="css-code">
          <p>width: 100%;</p>
          <p>height: 300px;</p>
          <p>background-color: {styles.containerBackground}; </p>
          <p>display: flex; </p>
          <p>justify-content: center; </p>
          <p> align-items: center;</p>
        </div>
        <h1 className="class">{"}"}</h1>
        <h1 className="class">
          .{styles.buttonClass} {"{"}
        </h1>
        <div className="css-code">
          <p>all: unset</p>
          <p>width: {styles.width + "px"}; </p>
          <p>height: {styles.height + "px"};</p>
          <p>
            border: {styles.borderWidth + "px"} solid {styles.borderColor};{" "}
          </p>
          <p>
            box-shadow: {styles.boxShadowX + "px"} {styles.boxShadowY + "px"} $
            {styles.boxShadowSpread + "px"} {styles.boxShadowColor};{" "}
          </p>

          <p>background-color: {styles.backgroundColor}; </p>
          <p>color: {styles.color};</p>
          <p>text-align: center; </p>
          <p>font-size: {styles.fontSize + "px"}; </p>
          <p>display: flex; </p>
          <p>justify-content: center;</p>
          <p>align-items: center;</p>
          <p>border-radius: {styles.borderRadius + "px"}; </p>
          <p>padding-left: {styles.paddingX + "px"}; </p>
          <p>padding-right: {styles.paddingX + "px"}; </p>
          <p>padding-top: {styles.paddingY + "px"}; </p>
          <p>padding-bottom: {styles.paddingY + "px"}; </p>
          <p> font-weight: {styles.fontWeight}; </p>
        </div>
        <h1 className="class">{"}"}</h1>
      </main>
      <footer className="footer" onClick={copyCodeToClipboard}>
        Copy Code
      </footer>
    </CodeStyled>
  );
};

export default CodeContainer;
