import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background-color: ${(props) => props.theme.colors.body.background};
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Inter', sans-serif;

  }

  button, input, label, select {
    cursor: pointer;
  }

  
`;
