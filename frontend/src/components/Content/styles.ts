import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
    .articles-wrapper-list {
        padding: 2% 2% 0;
        @media (max-width: 769px) {
            padding: 4% 4% 0;
        }
    }
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        overflow-y: auto;
        display: flex;
        flex-direction: column;


        @media (max-width: 769px) {
            z-index: 100;
            /* padding: 4% 4% 0; */
            position: relative;
        }
        @media (max-width: 425px) {
            z-index: 0;

        }
/* 
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
    } */

}
    `}
`;
