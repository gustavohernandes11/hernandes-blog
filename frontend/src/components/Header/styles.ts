import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`

        padding: 0 0 ${theme.spacings[5]} 0;

        margin-bottom: ${theme.spacing[8]};
        border-bottom: 1px solid ${theme.colors.border};

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: ${theme.colors.textSecondary};
    `}
`;
