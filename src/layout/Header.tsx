import { Logo } from "components/Logo";
import styled, { css } from "styled-components";
import { ThemeButton } from "components/ThemeButton";
import { GoBackButton } from "components/GoBackButton";

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
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        grid-area: header;
        padding: 0 1rem;
        width: calc(100vw - 2rem);
        height: 3.75rem;
        z-index: 10;
        background-color: ${theme.color.secondaryBackground};
        border-bottom: 1px solid ${theme.color.border};

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
