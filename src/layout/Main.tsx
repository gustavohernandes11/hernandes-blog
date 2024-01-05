import React from "react";
import styled from "styled-components";

export const Main = ({ children }: ILayoutProps) => {
    return <StyledContainer className="main">{children}</StyledContainer>;
};

const StyledContainer = styled.main`
    grid-area: main;
    padding: 1rem;
    max-width: 100vw;
    overflow-y: scroll;
    scroll-behavior: smooth;

    img {
        width: 100%;
        height: auto;
    }

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 8rem;
    }
`;
