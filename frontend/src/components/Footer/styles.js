import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        padding: ${theme.spacings[5]} 0;
        color: grey;
    `}
`;
