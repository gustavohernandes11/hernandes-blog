import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
* {
    box-sizing: border-box;
   
}

 html,
 body {
    padding: 0;
    font-family: "Raleway", sans-serif, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
        margin: 0;
        padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

p {
    line-height: 1.5;
    letter-spacing: 0.00938em;
}

path {
    fill: url("#my-cool-gradient");
}

.lading-page-spin {
    position: absolute;
    align-self: center;
    justify-self: center;
}

#floating-action-button {
    display: flex;
    position: fixed;
    right: 50%;
    bottom: 2rem;
    transform: translateX(50%);
    border-radius: 10px;

    background: rgb(45, 30, 209);
    background: linear-gradient(
        45deg,
        rgba(45, 30, 209, 1) 0%,
        rgba(151, 98, 181, 1) 100%
        );
    }
    * > #floating-action-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #layout-container {
    background-color: #121212;
    color: #e3e3e3;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "asidemenu content"
        "asidemenu footer";
    height: 100vh;
}
@media (max-width: 769px) {
    #layout-container {
        display: inline-block;
        width: 100vw;
    }
    #asidemenu {
        flex-direction: row;
        padding: 3.5rem 15%;
        justify-content: space-between;


    }
}
    `;

export default GlobalStyle;
