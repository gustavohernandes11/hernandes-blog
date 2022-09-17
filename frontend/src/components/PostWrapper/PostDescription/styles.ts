import styled, { css } from "styled-components";

export const Container = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.xs};
        margin: 0;
        height: 100%;
    `}
`;
