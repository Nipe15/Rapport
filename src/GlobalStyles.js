// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: auto;
    max-width: 1300px;
    font-family: 'Karla', sans-serif;
    background-color: var(--color-bg-alt);
    color: var(--color-text-primary);
  }

  p {
    font-family: 'Karla';
  }

  h1, h2, h3 {
    font-family: 'Karla';
  }

  li {
    font-family: 'Heebo', sans-serif;
  }

  a {
    font-family: 'Karla';
    color: var(--color-text-primary);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-accent-bright);
    text-decoration: underline;
  }

  ::selection {
    background: var(--color-accent-bright);
  }

  div, section {
    background-color: var(--color-bg-alt);
    color: var(--color-text-primary);
  }

  figure {
    background-color: var(--color-bg);
  }
`;

export default GlobalStyles;
