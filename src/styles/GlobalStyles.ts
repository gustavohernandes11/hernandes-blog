import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
body {
   ${({ theme }) => css`
       scroll-behavior: smooth;
       box-sizing: border-box;
       font-family: ${theme.font.secondaryFamily};
       color: ${theme.color.text};
       background-color: ${theme.color.background};
   `}
}

h1, h2, h3, h4, h5, h6 {
  ${({ theme }) => css`
      color: ${theme.textColor};
      font-family: ${theme.font.primaryFamily};
      margin: 0;
      font-weight: bold;
  `}
} 

h1 { font-size: 2rem }
h2 { font-size: 1.75rem }
h3 { font-size: 1.5rem }
h4 { font-size: 1.25rem }
h5 { font-size: 1.125rem }
h6 { font-size: 1.1rem }

a {
  text-decoration: none;
}

th {
  background-color: ${({ theme }) => theme.surfaceColor}
}

th, td {
  border: 1px solid #2e2e2e;
  padding: 0.5rem;
}

html,
body,
button,
textarea,
input {
  padding: 0;
  margin: 0;

  /* @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    font-size: 93.75%;
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    font-size: 87.50%;
  } */
}
`;

export default GlobalStyle;
