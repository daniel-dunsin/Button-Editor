import styled from "styled-components";

export const HomeStyled = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  .menu {
    position: fixed;
    top: 40px;
    right: 40px;
    width: 30px;
    height: 30px;
    justify-content: space-around;
    flex-direction: column;
    z-index: 4;
    display: none;
    span {
      width: 100%;
      height: 3px;
      background-color: black;
    }
  }
  .main-container {
    margin-left: 0px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    background: royalblue;

    padding: 8rem;
    .button-container {
      flex: 49%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 900px) {
    .menu {
      display: flex;
    }
    .main-container {
      flex: 1;
      width: 100%;
      padding: 2rem 8rem;
      gap: 2rem;
      flex-direction: column;
    }
  }
`;
