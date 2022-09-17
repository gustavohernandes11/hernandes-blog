import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
    ${({ theme, as }) => css`
        color: ${theme.colors.text};
        font-size: ${as === 'h1' && theme.fontSizes.lg};
        font-size: ${as === 'h2' && theme.fontSizes.md};
        font-size: ${as === 'h3' && theme.fontSizes.sm};

        margin: ${theme.spacings[5]} 0;

        
    `}
`;
