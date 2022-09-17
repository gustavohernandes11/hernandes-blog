import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.xs};

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${theme.spacings[2]};
    `}
`;
