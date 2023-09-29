import styled, { css } from "styled-components";

export const MenuBar = () => {
    return <StyledMenuBar></StyledMenuBar>;
};

const StyledMenuBar = styled.div`
    ${({ theme }) => css`
        grid-area: menubar;
        position: sticky;
        bottom: 0;
        left: 0;
        height: 100%,
        width: 100%;
        background-color: ${theme.color.secondaryBackground};
    `}
`;
