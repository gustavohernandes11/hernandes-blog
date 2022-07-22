import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings[8]};
        margin: ${theme.spacings[14]} 0;
    `}
`;
