import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({}) => css`
        width: auto;
        height: auto;
        background: url(Sky.png) no-repeat top center;
        background-size: contain;
        margin-bottom: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        position: relative;

        p {
            position: absolute;
        }
        img {
            width: 100%;
            height: auto;
        }

        @media (min-width: 769px) {
            margin: 0 2rem;
        }
        @media (min-width: 1000px) {
            margin: 0 4rem;
        }
    `}
`;
