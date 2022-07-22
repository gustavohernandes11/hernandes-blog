import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        padding: ${theme.spacings[5]} ${theme.spacings[20]};
        overflow-y: auto;

        .main-heading {
            font-size: ${theme.fontSizes.md};
        }
    `}
`;
