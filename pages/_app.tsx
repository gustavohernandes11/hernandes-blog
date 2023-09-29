import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyles";
import { Layout } from "layout";
import { ThemeContextProvider } from "contexts/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <Layout>
                <GlobalStyle />
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}

export default MyApp;
