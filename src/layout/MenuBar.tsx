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
        grid-area: menubar;
        position: sticky;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%,
        width: 100%;
        z-index: 10;
        background-color: ${theme.color.secondaryBackground};

        @media (min-width: ${theme.screen.tablet}) {
                display: none;
        }
    `}
`;
