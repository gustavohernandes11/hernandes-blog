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
        z-index: 100;
        width: 100%;

        padding: 10px;
        border-radius: 0 0 15px 15px;

        h1 {
            color: ${theme.colors.textSecondary};
        }

        @media (max-width: 425px) {
            display: flex;
        }
    `}
`;
