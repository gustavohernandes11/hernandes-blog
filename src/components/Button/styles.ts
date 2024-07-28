import styled, { css } from "styled-components";

export const Button = styled.button<any>`
    ${({ theme, backgroundColor, icon, iconPosition }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        border: 1px solid transparent;
        background-color: ${backgroundColor ?? "transparent"};
        color: ${theme.color.text};
        font-size: 1.2rem;

        :hover {
            cursor: pointer;
            border: 1px solid ${theme.color.border};
        }

        ${!icon &&
        css`
            padding: 1rem;
        `}

        ${icon &&
        iconPosition === "left" &&
        css`
            padding-right: 1rem;
        `}

        ${icon &&
        iconPosition === "right" &&
        css`
            padding-left: 1rem;
        `}
    `}
`;
