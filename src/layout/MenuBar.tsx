import { IconButton } from "components/IconButton";
import styled, { css } from "styled-components";
import { ArrowUp, Bars, Home } from "@styled-icons/fa-solid";

export const MenuBar = () => {
    return (
        <StyledMenuBar>
            <IconButton>
                <Home size={16} />
            </IconButton>
            <IconButton primary>
                <Bars size={16} />
            </IconButton>
            <IconButton>
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
        background-color: ${theme.color.secondaryBackground};
    `}
`;
