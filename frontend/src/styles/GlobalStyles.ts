import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --border-color: #2F2F2F;
    --gray-600: #2f2f2f;
    --gray-200: #d9d9d9;  
    --gray-900: #121212;
    --gray-800: #202020;
    
    --yellow: #ffffff;
    --blue: #382d57;
    --purple: #856ABD;
    
    --gradient-horizontal: linear-gradient(270deg, #4915B8 0%, rgba(165, 51, 255, 0.93) 100%);
    --gradient-vertical: linear-gradient(180deg, rgba(165, 51, 255, 0.93) 0%, #4915B8 100%);
 
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

  @media (max-width: 768px) {
    font-size: 93.75%;
  }

  @media (max-width: 425px) {
    font-size: 87.50%;
  }
}

#layout-container {
  height: 100vh;  
  background: url(background-galaxy.svg)  no-repeat top center;
  background-size: contain;


    .content {
        margin: 0 1rem;
    }
}



`;

export default GlobalStyle;
