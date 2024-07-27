import { useMenuContext } from "hooks/useMenuContext";
import { useThemeContext } from "hooks/useThemeContext";
import styled, { ThemeProvider, css } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import { Drawer } from "../components/Drawer";
import { ILayoutProps } from "../types/ILayoutProps";
import { Aside } from "./Aside";
import { Main } from "./Main";

export const Layout = ({ children }: ILayoutProps) => {
    const [theme] = useThemeContext();
    const { isOpen } = useMenuContext();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <StyledLayout>
                <Aside />
                <Main>
                    {children}
                    {isOpen ? <Drawer /> : null}
                </Main>
            </StyledLayout>
        </ThemeProvider>
    );
};

const StyledLayout = styled.div`
    ${({ theme }) => css`
        padding-top: 3.75rem;
        padding-bottom: 3.75rem;

        @media (min-width: ${theme.screen.tablet}) {
            display: grid;
            padding: 0;
            grid-template-rows: 1fr;
            grid-template-columns: 2fr 5fr;
            grid-template-areas: "aside main";
        }
    `}
`;
