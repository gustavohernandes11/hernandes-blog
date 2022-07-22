import styled, { css } from "styled-components";

export const Container = styled.aside`
    ${({ theme }) => css`
        background-color: ${theme.colors.surface};
        color: ${theme.colors.text};

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        #logo {
            font-size: ${theme.fontSizes.xxl};
            white-space: pre-line;
            text-align: center;
            text-align-last: justify;
        }
    `}
`;
