import { useAppProvider } from "@/context";
import React from "react";
import Editor from "../Editor/Editor";
import { SidebarStyled } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Editor sidebar={true} />
    </SidebarStyled>
  );
};

export default Sidebar;
