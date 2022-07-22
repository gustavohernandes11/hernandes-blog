import styled, { css } from "styled-components";

export const Header = styled.header`
    ${({ theme }) => css`
        height: 50px;
        background-color: ${theme.colors.surface};
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.ms};
        padding: 0 ${theme.spacings[10]};
        font-weight: ${theme.fontWeights.semibold};
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`;
