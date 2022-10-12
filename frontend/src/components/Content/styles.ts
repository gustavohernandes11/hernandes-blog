import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        height: 100%;

        color: ${theme.colors.text};
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        padding: 4% 4% 0;


        @media (max-width: 769px) {
            z-index: 100;
            padding:10px;
            position: relative;
        height: min-content;

        }
        @media (max-width: 425px) {
            z-index: 0;

        }

}
    `}
`;
