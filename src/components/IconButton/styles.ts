import styled, { css } from "styled-components";

export const Container = styled.button<any>`
    ${({ theme, backgroundColor, primary }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 0.5rem;
        border: none;
        background-color: ${() => backgroundColor ?? "transparent"};

        ${primary &&
        css`
            background-color: ${theme.color.primary};
            path {
                color: white;
            }
        `}

        :hover {
            cursor: pointer;
        }
    `}
`;
