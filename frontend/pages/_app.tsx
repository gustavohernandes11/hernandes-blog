import "../src/styles/globals.css";
import type { AppProps } from "next/app";

import { AsideMenu } from "../src/components/AsideMenu";
import { Hidden } from "../src/components/Hidden";
import { Theme } from "../src/theme/ThemeProvider";
import styles from "../src/styles/Home.module.css";
import { GlobalContextProvider } from "../src/contexts/globalContext/GlobalContextProvider";
import { useGlobalContext } from "../src/hooks/useGlobalContext";
import { FloatingActionButton } from "../src/components/FloatingActionButton";

function MyApp({ Component, pageProps }: AppProps) {
    const [state] = useGlobalContext();
    return (
        <div className={styles.container}>
            <GlobalContextProvider>
                <Hidden />
                <Theme>
                    <AsideMenu />
                    <Component {...pageProps} />
                    <FloatingActionButton />
                </Theme>
            </GlobalContextProvider>
        </div>
    );
}

export default MyApp;
