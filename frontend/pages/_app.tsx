import type { AppProps } from "next/app";
import { MenuContextProvider } from "contexts/MenuContextProvider";
import { Layout } from "../src/layout";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyles";
// import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MenuContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MenuContextProvider>
        </ThemeProvider>
    );
}

export default MyApp;
