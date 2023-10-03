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

path {
  ${({ theme }) => css`
      color: ${theme.color.text};
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

h1 { font-size: 3rem }
h2 { font-size: 1.75rem }
h3 { font-size: 1.5rem }
h4 { font-size: 1.25rem }
h5 { font-size: 1.125rem }
h6 { font-size: 1.1rem }

a {
  text-decoration: none; 
  color: ${({ theme }) => theme.color.secondary};
}

th { background-color: ${({ theme }) => theme.color.surface} }

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

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    h1 { font-size: 2.5rem };
  }
  
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    font-size: 93.75%;
    /* font-size: 87.50%; */
    h1 { font-size: 2rem };
  }
}

@media (min-width: ${({ theme }) => theme.screen.laptop}) {
  ::-webkit-scrollbar {
    width: 1rem;

  }

  ::-webkit-scrollbar-track {
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.secondaryBackground};
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    border-radius: 0.5rem;
  }
}
`;

export default GlobalStyle;
