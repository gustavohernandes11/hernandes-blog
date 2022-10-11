import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        padding: ${theme.spacings[2]};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        color: grey;
        border-top: 1px solid ${theme.colors.border};

        @media (max-width: 425px) {
            margin-bottom: 1rem;
        }
    `}
`;
