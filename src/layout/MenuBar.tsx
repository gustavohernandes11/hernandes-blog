import { Drawer } from "components/Drawer";
import { GoHomeButton } from "components/GoHomeButton";
import { GoTopButton } from "components/GoTopButton";
import { MenuButton } from "components/MenuButton";
import { useMenuContext } from "hooks/useMenuContext";
import styled, { css } from "styled-components";

type MenuBarProps = {
    visible: boolean;
};

export const MenuBar = ({ visible = true }: MenuBarProps) => {
    const { isOpen } = useMenuContext();
    return (
        <StyledMenuBar visible={visible || isOpen}>
            {isOpen ? <Drawer /> : null}
            <GoHomeButton />
            <MenuButton />
            <GoTopButton />
        </StyledMenuBar>
    );
};

const StyledMenuBar = styled.div<MenuBarProps>`
    ${({ theme, visible }) => css`
        grid-area: menubar;
        bottom: 0;
        left: 0;
        position: fixed;
        display: flex;
        flex-direction: row;
        transition: transform 0.3s ease-in-out;
        transform: ${visible ? "translateY(0)" : "translateY(3.75rem)"};
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
