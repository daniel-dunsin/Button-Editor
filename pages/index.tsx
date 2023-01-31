import Button from "@/components/Button/Button";
import CodeContainer from "@/components/Code/Code";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppProvider } from "@/context";
import { colors } from "@/static/colors";
import { HomeStyled } from "@/styles/Home.styled";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const { styles, updateStyles } = useAppProvider();
  return (
    <>
      <Head>
        <title>Button Editor</title>
      </Head>
      <HomeStyled>
        <Sidebar />
        <section className="main-container">
          <div className="design-container">
            <header>Preview</header>
            <div
              className="button-container"
              style={{ background: styles.containerBackground }}
            >
              <Button />
            </div>
            <footer>
              {colors.map((color: string, index: number) => (
                <article
                  key={index}
                  onClick={() => {
                    updateStyles("containerBackground", color);
                  }}
                  style={{ background: color }}
                  className={`${
                    styles.containerBackground === color && "chosen"
                  }`}
                ></article>
              ))}
            </footer>
          </div>
          <CodeContainer />
        </section>
      </HomeStyled>
    </>
  );
}
