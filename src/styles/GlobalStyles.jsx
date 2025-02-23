// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${props => props.theme.bodyFont};
    line-height: 1.6;
    color: ${props => props.theme.primaryColor};
    background: #ffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.headerFont};
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  a {
    color: ${props => props.theme.accentColor};
    text-decoration: none;
  }
`;

export default GlobalStyles;

