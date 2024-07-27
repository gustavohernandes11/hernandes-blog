import styled, { css } from "styled-components";
import { darkTheme } from "styles/theme";

export const Container = styled.button<any>`
    ${({ theme, backgroundColor, primary, secondary, disable }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        padding: 1rem;
        border: none;
        background-color: ${() => backgroundColor ?? "transparent"};

        ${primary &&
        css`
            background-color: ${theme.color.primary};
            path {
                color: ${darkTheme.color.text};
            }
        `}

        ${secondary &&
        css`
            padding: 0.5rem;
            path {
                color: ${theme.color.secondaryText};
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
