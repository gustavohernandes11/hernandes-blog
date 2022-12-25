import type { AppProps } from "next/app";
import GlobalStyles from "../src/styles/GlobalStyles";
import { MenuContextProvider } from "contexts/MenuContextProvider";
import { Layout } from "../src/layout";

import { theme } from "../src/theme";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            {/* <GlobalStyles /> */}
            <MenuContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MenuContextProvider>
        </ChakraProvider>
    );
}

export default MyApp;
