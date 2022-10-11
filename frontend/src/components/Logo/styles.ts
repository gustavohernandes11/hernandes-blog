import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme, size }: any) => css`
        .logo {
            font-size: ${size === "large" && theme.fontSizes.xxl};
            font-size: ${size === "medium" && theme.fontSizes.md};
            font-size: ${size === "small" && theme.fontSizes.xs};

            white-space: pre-line;
            text-align: center;
            text-align-last: justify;
            font-family: "Raleway", sans-serif;
            margin: 0;
        }
    `}
`;
