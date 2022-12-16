import type { AppProps } from "next/app";
import GlobalStyles from "../src/styles/GlobalStyles";
import { useScreen } from "../src/hooks/useScreen";
import { MenuContextProvider } from "contexts/MenuContextProvider";
import { Layout } from "../src/layout";

import { theme } from "../src/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    const { isTablet } = useScreen();

    return (
        <ChakraProvider theme={theme}>
            <GlobalStyles />
            <MenuContextProvider>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MenuContextProvider>
        </ChakraProvider>
    );
}

export default MyApp;
