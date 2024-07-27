import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        position: fixed;
        flex-direction: column;
        gap: 1.5rem;
        bottom: 3.75rem;
        left: 0;
        padding: 1rem;
        width: -webkit-fill-available;
        background-color: ${theme.color.secondarySurface};
        overscroll-behavior: contain;
        border: 1px solid ${theme.color.border};

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
            position: static;
        }
    `}
`;
