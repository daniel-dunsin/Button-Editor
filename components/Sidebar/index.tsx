import { useAppProvider } from "@/context";
import React from "react";
import { SidebarStyled } from "./index.styled";

const Sidebar = () => {
  const { navbarOpen, closeNavbar } = useAppProvider();
  return (
    <SidebarStyled className={`${navbarOpen && "open"}`}>
      <aside className="cancel" onClick={closeNavbar}>
        X
      </aside>
    </SidebarStyled>
  );
};

export default Sidebar;
