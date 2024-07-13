import { GoHomeButton } from "components/GoHomeButton";
import { GoTopButton } from "components/GoTopButton";
import { MenuButton } from "components/MenuButton";
import styled, { css } from "styled-components";

export const MenuBar = () => {
    return (
        <StyledMenuBar>
            <GoHomeButton />
            <MenuButton />
            <GoTopButton />
        </StyledMenuBar>
    );
};

const StyledMenuBar = styled.div`
    ${({ theme }) => css`
        grid-area: menubar;
        bottom: 0;
        left: 0;
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 3.75rem;
        width: 100%;
        background-color: ${theme.color.secondaryBackground};
        border-top: 1px solid ${theme.color.border};
        z-index: 10;

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
