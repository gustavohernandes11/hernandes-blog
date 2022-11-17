import { Aside } from "components/Aside";
import { Menu } from "components/_mobile/Menu";
import { MenuModal } from "components/_mobile/MenuModal";
import type { AppProps } from "next/app";
import GlobalStyles from '../src/styles/GlobalStyles'
import { useScreen } from '../src/hooks/useScreen'
import { MenuContextProvider } from "contexts/MenuContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
    const { isTablet } = useScreen()

    return (
        <main id="layout-container">
            <GlobalStyles />
            <MenuContextProvider>
                {!isTablet && <Aside />}
                <div className="content">
                    <Component {...pageProps} />
                </div>
                {isTablet && <Menu />}
                {isTablet && <MenuModal />}
            </MenuContextProvider>
        </main>
    );
}

export default MyApp;
