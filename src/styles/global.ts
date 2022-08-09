import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }

  h1, h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }
`