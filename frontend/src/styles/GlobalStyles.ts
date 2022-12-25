import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  scroll-behavior: smooth;
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

/* a {
  text-decoration: none;
  color: inherit;
}

#layout-container {
  height: 100vh;  
  background-size: contain;
    .content {
        padding-bottom: 3rem;
        overflow-x: hidden;
    }
}
hr {
  border: 1px solid var(--border);
  margin: 2rem 0;
}


@media (min-width: 769px) {
  #layout-container {
  display: grid; 
  background-image: unset;
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 3fr; 
  height: 100vh;

  .aside { 
    grid-area: 1 / 1 / 2 / 2;
   }
  .content { 

    grid-area: 1 / 2 / 2 / 3;
    overflow-y: auto;
    padding: 2rem 3rem 0 3rem;
   }
}
.post-wrapper-content {
  margin: 0 2rem;
}
}
*/
/* @media (min-width: 1000px) {
  .post-wrapper-content {
    margin: 0 4rem;
  } */

/* } */
  /* @media (max-width: 425px) {
    font-size: 87.50%;
  } */
`;

export default GlobalStyle;
