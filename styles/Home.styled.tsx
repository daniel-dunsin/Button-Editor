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
    background: #01071a;

    padding: 4rem;
    .design-container {
      width: 100%;
      flex: 49%;
      max-width: 400px;
      header {
        width: 100%;
        padding: 1rem;
        background-color: #0e329c;
        color: white;
        font-weight: bold;
      }
      .button-container {
        width: 100%;
        height: 300px;
        background-color: #1c1c1f;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      footer {
        background-color: #ecebeb;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        article {
          width: 25px;
          height: 25px;
          border: 2px solid transparent;
          border-radius: 4px;
          &.chosen {
            border-color: #0e329c;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .menu {
      display: flex;
    }
    .main-container {
      flex: 1;
      width: 100%;
      padding: 2rem;
      gap: 2rem;
      flex-direction: column;
      max-width: 700px;
      margin: 0 auto;
    }
  }
`;
