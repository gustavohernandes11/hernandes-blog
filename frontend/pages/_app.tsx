import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { AsideMenu } from "../src/components/AsideMenu";
import { Theme } from "../src/theme/ThemeProvider";
import styles from "../src/styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={styles.container}>
            <Theme>
                <AsideMenu />
                <Component {...pageProps} />
            </Theme>
        </div>
    );
}

export default MyApp;
