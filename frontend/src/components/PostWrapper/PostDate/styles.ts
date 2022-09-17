import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        font-size: ${theme.fontSizes.sx};
        font-family: "Raleway", sans-serif, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        margin: 0;
    `}
`;
