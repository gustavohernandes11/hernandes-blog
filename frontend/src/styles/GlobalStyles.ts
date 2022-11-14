import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --border: #2F2F2F;
    --gray-600: #2f2f2f;
    --gray-200: #d9d9d9;  
    --gray-900: #121212;
    --gray-800: #202020;
    --blue-900: #382D57;
    
    --white: #fff;
    --blue: #382d57;
    --purple: #856ABD;
    
    --gradient-horizontal: linear-gradient(270deg, #4915B8 0%, rgba(165, 51, 255, 0.93) 100%);
    --gradient-vertical: linear-gradient(180deg, rgba(165, 51, 255, 0.93) 0%, #4915B8 100%);

    --shadow: 0px 3.32468px 3.32468px rgba(0, 0, 0, 0.25);

    --sm: 768px;
    --xs: 425px;
 
}

* {
  box-sizing: border-box;
}

html,
body,
button,
textarea,
input {
  padding: 0;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  background-color: var(--gray-900);

  color: var(--gray-200);

  @media (max-width: var(--sm)) {
    font-size: 93.75%;
  }

  @media (max-width: var(--xs)) {
    font-size: 87.50%;
  }
}

#layout-container {
  height: 100vh;  
  background: url(background-galaxy.svg)  no-repeat top center;
  background-size: contain;
    .content {
        padding-bottom: 3rem;
    }
}
.margin {
  margin: 0 1rem;

}
hr {
  border:1px solid var(--border);
  margin: 2rem 0;
}
`;

export default GlobalStyle;
