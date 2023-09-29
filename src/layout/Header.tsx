import styled, { css } from "styled-components";

export const Header = () => {
    return <StyledHeader></StyledHeader>;
};

export const StyledHeader = styled.header`
    ${({ theme }) => css`
        display: flex;    
        position: sticky;
        top: 0;
        left: 0;
        grid-area: header;
        height: 100%,
        width: 100%;
        background-color: ${theme.color.secondaryBackground};
    `}
`;
