import { IconButton } from "components/IconButton";
import styled, { css } from "styled-components";
import { Bars, Home, X } from "@styled-icons/fa-solid";
import { useMenuContext } from "../hooks/useMenuContext";
import { GoTopButton } from "components/GoTopButton";
import Link from "next/link";

export const MenuBar = () => {
    const { isOpen, toggleMenu } = useMenuContext();
    const getMenuIcon = () => (isOpen ? <X size={16} /> : <Bars size={16} />);

    return (
        <StyledMenuBar>
            <Link href="/">
                <IconButton>
                    <Home size={16} />
                </IconButton>
            </Link>
            <IconButton onClick={toggleMenu} primary>
                {getMenuIcon()}
            </IconButton>
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
