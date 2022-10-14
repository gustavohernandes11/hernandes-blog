import type { AppProps } from "next/app";

import { AsideMenu } from "../src/components/AsideMenu";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { Hidden } from "../src/components/Hidden";
import { Theme } from "../src/theme/ThemeProvider";
import GlobalStyles from '../src/styles/GlobalStyles'
import { GlobalContextProvider } from "../src/contexts/globalContext/GlobalContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main id="layout-container">
            <GlobalStyles />
            <GlobalContextProvider>
                <Hidden />
                <Theme>
                    <FloatingActionButton />
                    <AsideMenu />
                    <Component {...pageProps} />
                </Theme>
            </GlobalContextProvider>
        </main>
    );
}

export default MyApp;
