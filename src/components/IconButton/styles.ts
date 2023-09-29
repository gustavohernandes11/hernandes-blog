import styled, { css } from "styled-components";

export const Container = styled.button<any>`
    ${({ theme, backgroundColor, primary }) => css`
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: none;
        background-color: ${() => backgroundColor ?? "transparent"};

        ${() =>
            primary &&
            css`
                background-color: ${theme.color.primary};
                color: white;
            `}

        :hover {
            cursor: pointer;
        }
    `}
`;
