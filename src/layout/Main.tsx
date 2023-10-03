import React from "react";
import styled from "styled-components";

interface MainType {
    children?: React.ReactNode;
}

export const Main = ({ children }: MainType) => {
    return <StyledContainer className="main">{children}</StyledContainer>;
};

const StyledContainer = styled.main`
    grid-area: main;
    padding: 1rem;
    max-width: 100vw;
    overflow-y: scroll;
    scroll-behavior: smooth;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 4rem;
    }
`;
