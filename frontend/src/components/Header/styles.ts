import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`
        margin: 0 ${theme.spacing[8]};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `}
`;
