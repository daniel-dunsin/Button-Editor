import styled, { StyledComponent } from "styled-components";

export const EditorStyled = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  & > aside {
    width: 10px;
    background-color: white;
  }
  & > .editor-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Accordion = styled.article`
  width: 100%;
  & > header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: rgba(0, 0, 14, 0.836);
    padding: 0.8rem 1rem;
  }
  .color-editor {
    width: 100%;
    background-color: #0a0346;
    height: 0px;
    transition: height 0.3s;
    overflow: hidden;
    &.open {
      height: 60px;
      padding: 10px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    input {
      display: none;
    }
    label {
      height: 40px;
      width: 100%;
      display: block;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .sizes-editor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 0px;
    transition: height 0.3s;
    overflow: hidden;
    &.open {
      height: 40px;
      padding: 0.5rem 1rem;
    }
    input {
      width: 70%;
      accent-color: royalblue;
    }
  }
  .border-editor {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    height: 0px;
    transition: height 0.3s;
    overflow: hidden;
    &.open {
      padding: 0.5rem 1rem;
      height: 40px;
    }
    .border-color-container {
      label {
        width: 25px;
        height: 25px;
        border-radius: 4px;
        display: block;
        cursor: pointer;
      }
      #border-color {
        display: none;
      }
    }
  }
  .box-shadow-editor {
    height: 0px;
    overflow: hidden;
    transition: height 0.3s;
    &.open {
      height: 215px;
      padding: 0.5rem 1rem;
    }
    & > div {
      header {
        display: block;
        text-align: center;
      }
      & > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
        & > input[type="radio"] {
          width: 80%;
        }
        & > input[type="color"] {
          display: none;
          & + label {
            width: 100%;
            height: 35px;
            display: block;
            border-radius: 4px;
            margin-top: 5px;
            border: 2px solid white;
          }
        }
      }
    }
  }
  .text-editor {
    height: 0px;
    overflow: hidden;
    transition: height 0.5s;
    &.open {
      padding: 0.6rem 1rem;
      height: 55px;
    }
    input {
      width: 100%;
      background-color: rgba(0, 0, 14, 0.836);
      border: 2px solid white;
      padding: 8px 1rem;
      border-radius: 4px;
      color: white;
      outline: none;
    }
  }
`;
