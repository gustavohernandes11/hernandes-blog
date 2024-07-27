import { ThemeContextProvider } from "contexts/ThemeContext";
import { Layout } from "layout";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyles";
import { MenuContextProvider } from "../src/contexts/MenuContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MenuContextProvider>
            <ThemeContextProvider>
                <Layout>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </Layout>
            </ThemeContextProvider>
        </MenuContextProvider>
    );
}

export default MyApp;
