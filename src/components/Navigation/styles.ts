import styled, { css } from "styled-components";

export const Nav = styled.nav`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        grid-area: nav;
        gap: 1rem;
        font-weight: 600;
        color: ${theme.color.text};
        font-size: 1.5rem;

        a {
            color: ${theme.color.text};
        }
    `}
`;
