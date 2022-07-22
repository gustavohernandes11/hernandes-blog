import styled, { css } from "styled-components";

export const Container = styled.a`
    ${({ theme }) => css`
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.sm};
        padding: ${theme.spacings[2]};

        :hover {
            cursor: pointer;
            background: ${theme.colors.background};
        }
    `}
`;
