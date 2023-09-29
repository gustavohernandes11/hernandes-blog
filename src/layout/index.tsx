import styled, { css } from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import { MenuBar } from "./MenuBar";
import { Aside } from "./Aside";

export const Layout = ({ children }: any) => {
    return (
        <StyledLayout>
            <Header />
            <Aside />
            <Main>{children}</Main>
            <MenuBar />
        </StyledLayout>
    );
};

const StyledLayout = styled.div`
    ${() => css`
        display: grid;
        grid-template-rows: 3.75rem 1fr 3.75rem;
        grid-template-areas: "header" "main" "menubar";
        width: 100vw;
        height: 100vh;

        @media (min-width: ${({ theme }) => theme.screen.tablet}) {
            grid-template-rows: 1fr;
            grid-template-columns: 2fr 5fr;
            grid-template-areas: "aside main";
        }
    `}
`;
