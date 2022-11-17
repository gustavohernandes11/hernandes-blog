import styled, { css } from "styled-components";

export const Container = styled.h1`
    ${({}) => css`
        font-size: 3.2rem;
        font-weight: 900;

        @media (max-width: 759px) {
            margin: 2rem 0;
        }
    `}
`;
