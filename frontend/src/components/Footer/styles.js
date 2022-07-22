import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.sm};
        padding: ${theme.spacings[5]} ${theme.spacings[10]};
    `}
`;
