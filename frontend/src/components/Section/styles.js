import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.sm};
        padding: ${theme.spacings[5]} ${theme.spacings[10]};
        min-height: 70vh;
        display: flex;
        align-items: center;
    `}
`;
