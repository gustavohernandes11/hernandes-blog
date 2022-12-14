import { Menu } from "components/_mobile/Menu";
import type { AppProps } from "next/app";
import GlobalStyles from "../src/styles/GlobalStyles";
import { useScreen } from "../src/hooks/useScreen";
import { MenuContextProvider } from "contexts/MenuContextProvider";
import { Header } from "components/_mobile/Header";
import { Layout } from "../src/layout";

import { theme } from "../src/theme";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Aside } from "layout/Aside";

function MyApp({ Component, pageProps }: AppProps) {
    const { isTablet } = useScreen();

    return (
        <ChakraProvider theme={theme}>
            <GlobalStyles />
            <MenuContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MenuContextProvider>
        </ChakraProvider>
    );
}

export default MyApp;
