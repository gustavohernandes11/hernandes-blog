import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        padding: ${theme.spacings[14]} 15%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;

        @media (max-width: 769px) {
            z-index: 100;
            position: relative;
        }
        @media (max-width: 425px) {
            padding: ${theme.spacings[14]} 10%;
            z-index: 0;

        }

}
    `}
`;
