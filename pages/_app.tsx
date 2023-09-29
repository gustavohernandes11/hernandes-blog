import type { AppProps } from "next/app";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyles";
import { Layout } from "layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <Layout>
                <GlobalStyle />
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
