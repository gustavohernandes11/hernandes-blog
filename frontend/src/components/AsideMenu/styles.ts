import styled, { css } from "styled-components";

export const Container = styled.aside`
    ${({ theme }) => css`
        background: ${theme.colors.surfaceGradient};
        color: ${theme.colors.text};
        z-index: ${theme.zIndices.docked};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        #logo {
            font-size: ${theme.fontSizes.xxl};
            white-space: pre-line;
            text-align: center;
            text-align-last: justify;
            font-family: "Raleway", sans-serif;
        }

        @media (max-width: 769px) {
            #logo {
                font-size: ${theme.fontSizes.lg};
            }
            flex-direction: row;
            padding: 3.5rem 15%;
            justify-content: space-between;
            background: ${theme.colors.surface};
            position: sticky;
            top: 0;
            left: 0;
            z-index: ${theme.zIndices.base};
        }
        @media (max-width: 425px) {
            flex-direction: column;
            justify-content: space-around;
            position: fixed;
            top: unset;
            left: unset;
            height: 100vh;
            width: 100vw;
            align-items: center;
            gap: 1rem;
            background: ${theme.colors.surfaceGradient};
            z-index: ${theme.zIndices.docked};
        }
    `}
`;
