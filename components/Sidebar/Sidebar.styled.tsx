import styled from "styled-components";

export const SidebarStyled = styled.aside`
  width: 300px;
  max-height: 100vh;
  background-color: #00061d;
  z-index: 5;
  position: relative;
  color: white;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 900px) {
    display: none;
  }
`;
