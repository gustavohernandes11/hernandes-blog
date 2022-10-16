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
.MuiTypography-root, .MuiButton-root{
    font-family: "Raleway", sans-serif, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
}
.MuiButton-root {
text-transform: unset;
}
a {
    color: inherit;
    text-decoration: none;
}

p {
    line-height: 1.5;
    letter-spacing: 0.00938em;
}

path, circle {
    fill: url("#my-cool-gradient");
}

.loading-page-spin {
    position: absolute;
    align-self: center;
    justify-self: center;
}

#floating-action-button {
    color: #7640e3;
    display: none;
    position: fixed;
    right: 15px;
    top: 15px;
    border-radius: 10px;
    box-shadow: none;
    background: transparent;

    * > #floating-action-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

    #layout-container {
        background-color: #121212;
        color: #e3e3e3;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        grid-template-areas:"asidemenu content"
                            "asidemenu footer";
        height: 100vh;
    }

@media (max-width: 769px) {
    #layout-container {
        display: inline-block;
        width: 100vw;
    }
    #asidemenu {
        padding: 3.5rem 15%;
    }
}
@media (max-width: 425px) {
    #floating-action-button {
        display: fixed;
    }
    #asidemenu {
            flex-direction: column;
            justify-content: space-evenly;
        }
    }


`;

export default GlobalStyle;
