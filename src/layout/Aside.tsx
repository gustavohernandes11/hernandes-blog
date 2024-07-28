import { Copyright } from "components/Copyright";
import { Logo } from "components/Logo";
import { Navigation } from "components/Navigation";
import { Social } from "components/Social";
import { ThemeButton } from "components/ThemeButton";
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
            <AbsoluteThemeButton />
        </StyledAside>
    );
};

const AbsoluteThemeButton = () => {
    return (
        <StyledAbsolute>
            <ThemeButton />
        </StyledAbsolute>
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
        border-right: 1px solid ${theme.color.border};

        @media (max-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;

const StyledAsideFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-width: 14rem;
`;

const StyledAbsolute = styled.div`
    ${({ theme }) => css`
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(50%, -50%);
        background-color: ${theme.color.secondaryBackground};
        border: 1px solid ${theme.color.border};
        border-radius: 1rem;
    `}
`;
