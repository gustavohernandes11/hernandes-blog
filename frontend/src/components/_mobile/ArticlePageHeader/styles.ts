import styled, { css } from "styled-components";

type ContainerType = {
    isVisible: boolean;
    theme: any;
};
export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        max-width: calc(100vw - 3.75rem - 3.75rem);
    }
`;

export const Container = styled.header`
    ${({ isVisible, theme }: ContainerType) => css`
        @media (min-width: ${({ theme }) => theme.screen.mobile}) {
            display: none;
        }
        @media (max-width: ${({ theme }) => theme.screen.mobile}) {
            transform: ${isVisible ? `translateY(0)` : `translateY(-3.75rem)`};
            transition: transform 0.3s linear;

            grid-area: mobile-article-header;

            background-color: ${theme.secondaryBackgroundColor};
            border-bottom: 1px solid ${({ theme }) => theme.borderColor};
            height: 3.75em;
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;

            display: grid;
            grid-template-columns: 3.75rem 1fr 3.75rem;
        }
    `}
`;
