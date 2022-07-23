import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        padding: ${theme.spacings[5]} 10%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        p {
            text-align: justify;
        }
}
        .main-heading {
            font-size: ${theme.fontSizes.md};
        }
    `}
`;
