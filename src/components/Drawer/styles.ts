import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: grid;
        position: fixed;
        top: 0;
        left: 0;
        margin: 3.75rem 0;
        height: -webkit-fill-available;
        width: -webkit-fill-available;
        grid-template-rows: 1fr 3fr 1fr;
        grid-template-areas: "." "nav" "drawer-footer";
        align-items: center;
        justify-content: center;
        background-color: ${theme.color.background};
        overscroll-behavior: contain;

        @media (min-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
