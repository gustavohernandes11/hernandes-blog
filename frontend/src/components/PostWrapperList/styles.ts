import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings[4]};
        margin: ${theme.spacings[4]} 0;
    `}
`;
