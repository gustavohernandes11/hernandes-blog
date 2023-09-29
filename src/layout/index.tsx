import styled, { css } from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import { MenuBar } from "./MenuBar";
import { Aside } from "./Aside";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import { useThemeContext } from "contexts/useThemeContext";

export const Layout = ({ children }: any) => {
    const [theme] = useThemeContext();
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <StyledLayout>
                <Header />
                <Aside />
                <Main>{children}</Main>
                <MenuBar />
            </StyledLayout>
        </ThemeProvider>
    );
};

const StyledLayout = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-rows: 3.75rem 1fr 3.75rem;
        grid-template-areas: "header" "main" "menubar";
        max-width: 100vw;
        height: 100vh;

        @media (min-width: ${theme.screen.tablet}) {
            grid-template-rows: 1fr;
            grid-template-columns: 2fr 5fr;
            grid-template-areas: "aside main";
        }
    `}
`;
