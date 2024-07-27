import styled, { css } from "styled-components";

export const Container = styled.button<any>`
    ${({ theme, backgroundColor, primary, disable }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
        background-color: ${() => backgroundColor ?? "transparent"};

        ${primary &&
        css`
            background-color: ${theme.color.primary};
            path {
                color: "#f1f1f1";
            }
        `}
        ${disable &&
        css`
            opacity: 0.25;
            :hover {
                cursor: unset;
            }
        `}

        :hover {
            cursor: pointer;
        }
    `}
`;
