import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.border};
        background-color: ${theme.colors.surface};

        display: none;
        flex-direction: row;
        justify-content: center;

        position: sticky;
        left: 0;
        top: 0;
        z-index: 50;
        width: 100%;

        padding: 10px;

        h1 {
            color: ${theme.colors.textSecondary};
        }

        @media (max-width: 425px) {
            display: flex;
        }
    `}
`;
