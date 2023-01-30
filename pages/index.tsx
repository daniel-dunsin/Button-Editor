import Button from "@/components/Button";
import CodeContainer from "@/components/Code";
import Sidebar from "@/components/Sidebar";
import { useAppProvider } from "@/context";
import { HomeStyled } from "@/styles/Home.styled";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const { openNavbar } = useAppProvider();
  return (
    <>
      <Head>
        <title>Button Editor</title>
      </Head>
      <HomeStyled>
        <div className="menu" onClick={openNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Sidebar />
        <section className="main-container">
          <div className="button-container">
            <Button />
          </div>
          <CodeContainer />
        </section>
      </HomeStyled>
    </>
  );
}
