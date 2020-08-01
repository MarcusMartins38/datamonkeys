import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    overflow-y: hidden;
    background-color: #E5E5E5;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Inter', sans-serif;
  }
`;
