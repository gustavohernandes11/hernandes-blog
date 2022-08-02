import styled, { css } from "styled-components";

export const Container = styled.aside`
    ${({ theme }) => css`
        background: ${theme.colors.surface};
        color: ${theme.colors.text};
        box-shadow: 4px 0px 10px rgb(0, 0, 0, 0.1);
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
        }
        @media (max-width: 425px) {
            flex-direction: column;
            position: fixed;
            height: 100vh;
            width: 100vw;
            justify-content: center;
            align-items: center;
            gap: 1rem;

        }
    `}
`;
