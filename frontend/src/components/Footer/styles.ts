import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        padding: ${theme.spacings[5]} 0 0 0;
        margin-top: 30px;

        color: grey;
        
        border-top: 1px solid ${theme.colors.border};

        @media (max-width: 425px) {
            margin-bottom: 1rem;
        }
    `}
`;
