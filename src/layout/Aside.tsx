import { Copyright } from "components/Copyright";
import { Logo } from "components/Logo";
import { Navigation } from "components/Navigation";
import { Social } from "components/Social";
import styled, { css } from "styled-components";

export const Aside = () => {
    return (
        <StyledAside>
            <Logo scale={1.5} />
            <Navigation />
            <StyledAsideFooter>
                <Social />
                <Copyright />
            </StyledAsideFooter>
        </StyledAside>
    );
};

export const StyledAside = styled.aside`
    ${({ theme }) => css`
        position: sticky;
        display: flex;
        top: 0;
        left: 0;
        grid-area: aside;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        max-height: 100vh;
        width: 100%;
        background-color: ${theme.color.secondaryBackground};
        border-right: 1px solid ${theme.color.surface};

        @media (max-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;

export const StyledAsideFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
