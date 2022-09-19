import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        padding: ${theme.spacings[8]} 6%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;


        @media (max-width: 769px) {
            z-index: 100;
        padding: ${theme.spacings[8]} 4%;

            position: relative;
        }
        @media (max-width: 425px) {
            z-index: 0;

        }

        .MuiCard-root {
            background-color: ${theme.colors.surface};
            color: ${theme.colors.text};
        }
        .MuiCardContent-root {
            height: 100%;
        }
        .MuiCardActionArea-root {
            height: 100%;
        }
	.MuiChip-root  {
        color: ${theme.colors.text};
    }

}
    `}
`;
