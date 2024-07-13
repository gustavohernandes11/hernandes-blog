import { GoBackButton } from "components/GoBackButton";
import { Logo } from "components/Logo";
import { ThemeButton } from "components/ThemeButton";
import styled, { css } from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <GoBackButton />
            <Logo />
            <ThemeButton />
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
    ${({ theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        grid-area: header;
        padding: 0 1rem;
        width: calc(100vw - 2rem);
        height: 3.75rem;
        background-color: ${theme.color.secondaryBackground};
        border-bottom: 1px solid ${theme.color.border};
        z-index: 10;

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
