import styled, { css } from "styled-components";

export const ArticleContainer = styled.article`
    ${({ theme }) => css`
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid ${theme.color.border};
        border-radius: 0.5rem;
        background-color: ${theme.color.secondarySurface};
        color: ${theme.color.text};
        transition: transform ease-out 0.3s;

        :hover {
            cursor: pointer;
            transform: scale(1.02);
        }

        @media (max-width: ${theme.screen.tablet}) {
            margin-bottom: 0.5rem;
        }
    `}
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    margin-top: 0.5rem;

    p {
        margin: 0;
    }
`;

export const ArticleTitle = styled.h1`
    ${({ theme }) => css`
        font-size: 1.5rem;

        @media (max-width: ${theme.screen.tablet}) {
            font-size: 1.25rem;
        }

        @media (max-width: ${theme.screen.mobile}) {
            font-size: 1.15rem;
        }
    `}
`;
export const ArticleDescription = styled.p`
    ${({ theme }) => css`
        margin-top: 0.5rem;
    `}
`;
