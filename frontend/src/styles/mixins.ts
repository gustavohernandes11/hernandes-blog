import { css } from "styled-components";

export const mixin = {
    buttonStyle: css`
        padding: 0.5rem;
        background: ${({ theme }) => theme.surfaceColor};
        border: none;
        border-radius: 0.5rem;

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
