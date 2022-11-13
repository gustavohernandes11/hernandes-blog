import type { AppProps } from "next/app";
import GlobalStyles from '../src/styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main id="layout-container">
            <GlobalStyles />
            <div className="content">
                <Component {...pageProps} />
            </div>
        </main>
    );
}

export default MyApp;
