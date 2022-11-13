import styled, { css } from "styled-components";

export const Logo = styled.strong`
    ${({ size }: any) => css`

            font-size: ${size === "large" && '2rem'};
            font-size: ${size === "medium" && '1.3rem'};
            font-size: ${size === "small" && '1rem'};
            display: block;
            font-weight: 900;
            text-align: center;
            line-height: 1rem;

            margin: 0;
            background: var(--gradient-horizontal);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

    `}
`;
