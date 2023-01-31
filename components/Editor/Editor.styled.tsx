import styled, { StyledComponent } from "styled-components";

export const EditorStyled = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 90px;
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
  header {
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
`;
