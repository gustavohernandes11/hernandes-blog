import React from "react";
import styled from "styled-components";

interface ContentType {
    children?: React.ReactNode;
}

export const Content = ({ children }: ContentType) => {
    return <Box className="content">{children}</Box>;
};

const Box = styled.main`
    grid-area: content;
    margin: 3.75rem 0;
    overflow: hidden;
    padding: 1rem;

    @media (max-width: ${({ theme }) => theme.screen.tablet}) {
        margin: 0;
    }
`;
