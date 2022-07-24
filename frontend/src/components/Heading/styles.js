import styled, { css } from "styled-components";

export const Element = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.md};
        margin: ${theme.spacings[5]} 0;
    `}
`;
