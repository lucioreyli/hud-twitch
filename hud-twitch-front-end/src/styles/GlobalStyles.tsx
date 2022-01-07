import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    font-family: Inter, sans-serif;

  }
  #root {
    height: 100vh;
    display: flex;
    align-items: flex-end;
  }
`