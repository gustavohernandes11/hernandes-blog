import type { AppProps } from "next/app";

import { AsideMenu } from "../src/components/AsideMenu";
import { Hidden } from "../src/components/Hidden";
import { Theme } from "../src/theme/ThemeProvider";
import GlobalStyles from '../src/styles/GlobalStyles'
import { GlobalContextProvider } from "../src/contexts/globalContext/GlobalContextProvider";
import { FloatingActionButton } from "../src/components/FloatingActionButton";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main id="layout-container">
            <GlobalContextProvider>
                <GlobalStyles />
                <Hidden />
                <Theme>
                    <AsideMenu />
                    <Component {...pageProps} />
                    <FloatingActionButton />
                </Theme>
            </GlobalContextProvider>
        </main>
    );
}

export default MyApp;
