import styled from "styled-components";

export const SidebarStyled = styled.aside`
  width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 5;
  position: relative;
  .cancel {
    display: none;
  }
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    transition: all 0.5s;
    &.open {
      transform: translateX(0);
    }
    .cancel {
      position: absolute;
      top: 40px;
      right: 40px;
      font-weight: bold;
      display: block;
      cursor: pointer;
    }
  }
`;
