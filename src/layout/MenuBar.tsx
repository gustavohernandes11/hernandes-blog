import styled, { css } from "styled-components";
import { GoTopButton } from "components/GoTopButton";
import { GoHomeButton } from "components/GoHomeButton";
import { MenuButton } from "components/MenuButton";

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
        display: flex;
        grid-area: menubar;
        position: fixed;
        bottom: 0;
        left: 0;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 3.75rem;
        width: 100%;
        z-index: 10;
        background-color: ${theme.color.secondaryBackground};
        border-top: 1px solid ${theme.color.border};

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
