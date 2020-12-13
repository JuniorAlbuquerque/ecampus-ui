import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--dark);
    font-size: 16px;
  }

  html, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    background: var(--background);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Ubuntu', sans-serif;
  }

  :root {
    --primary: #009441;
    --secondary: #0B6B6B;
    --dark: #091008;
    --white: #fff;
    --background: #EFEFEF;
    --gray: #C4C4C4;
    --greenDark: #003015;
  }
`;