import { css } from "styled-components";

export const mixin = {
    buttonStyle: css`
        padding: 1rem;
        background: ${({ theme }) => theme.surfaceColor};
        border: none;
        border-radius: 0.25rem;

        &:hover {
            cursor: pointer;
        }
    `,
    flexCenter: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
};
