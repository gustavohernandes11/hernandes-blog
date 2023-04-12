import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`

* {
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.primaryFontFamily};
  color: ${(props) => props.theme.textColor};
  
}

h1, h2, h3, h4, h5, h6 {
  ${(props) => css`
      color: ${props.theme.textColor};
      margin: 0;
  `}
}
a {
  text-decoration: none;
}
hr {
  background-color: gray;
}


html,
body,
button,
textarea,
input {
  padding: 0;
  margin: 0;


  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    font-size: 93.75%;
  }

  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    font-size: 87.50%;
  }
}
`;
export default GlobalStyle;
