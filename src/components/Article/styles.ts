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

export const ArticleCategory = styled.p`
    ${({ theme }) => css`
        margin: 0;
        color: ${theme.color.secondaryText};
    `};
`;

export const ArticlePublishDate = styled.time`
    ${({ theme }) => css`
        margin: 0;
        color: ${theme.color.secondaryText};
    `};
`;

export const ArticleTitle = styled.h1`
    ${({ theme }) => css`
        margin-top: 1rem;
        font-size: 1.5rem;

        @media (max-width: ${theme.screen.tablet}) {
            font-size: 1.35rem;
        }

        @media (max-width: ${theme.screen.mobile}) {
            font-size: 1.25rem;
        }
    `}
`;
export const ArticleDescription = styled.p`
    ${({ theme }) => css`
        margin-top: 0.5rem;
        color: ${theme.color.secondaryText};
    `};
`;
