import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        position: fixed;
        flex-direction: column;
        gap: 2rem;
        top: 0;
        left: 0;
        padding: 3.75rem 0;
        height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${theme.color.background};
        overscroll-behavior: contain;

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
