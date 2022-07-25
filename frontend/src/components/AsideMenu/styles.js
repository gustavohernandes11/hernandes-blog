import styled, { css } from "styled-components";

export const Container = styled.aside`
    ${({ theme }) => css`
        background-color: ${theme.colors.surface};
        color: ${theme.colors.text};
        box-shadow: 4px 0px 10px rgb(0, 0, 0, 0.1);
        z-index: ${theme.zIndices.docked};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        #logo {
            font-size: ${theme.fontSizes.xxl};
            white-space: pre-line;
            text-align: center;
            text-align-last: justify;
            font-family: century-gothic, sans-serif;
        }
    `}
`;
