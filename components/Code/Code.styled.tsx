import styled from "styled-components";

export const CodeStyled = styled.section`
  flex: 49%;
  width: 100%;
  max-width: 400px;
  header {
    width: 100%;
    padding: 1rem;
    background-color: #ecebeb;
  }
  main {
    width: 100%;
    height: 300px;
    background-color: #1c1c1f;
    overflow: hidden;
    overflow-y: scroll;
    padding: 1rem;
    color: white;
    font-size: 15px;
    .css-code {
      padding-left: 12px;
    }
  }
  footer {
    background-color: #0e329c;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    cursor: pointer;
  }
`;
