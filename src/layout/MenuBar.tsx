import { IconButton } from "components/IconButton";
import styled, { css } from "styled-components";
import { ArrowUp, Bars, Home, X } from "@styled-icons/fa-solid";
import { useMenuContext } from "../hooks/useMenuContext";

export const MenuBar = () => {
    const { isOpen, toggleMenu } = useMenuContext();
    const getMenuIcon = () => (isOpen ? <X size={16} /> : <Bars size={16} />);
    return (
        <StyledMenuBar>
            <IconButton onClick={() => {}}>
                <Home size={16} />
            </IconButton>
            <IconButton onClick={toggleMenu} primary>
                {getMenuIcon()}
            </IconButton>
            <IconButton onClick={() => {}}>
                <ArrowUp size={16} />
            </IconButton>
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
