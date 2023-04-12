import { GoTopButton } from "components/GoTopButton";
import React from "react";
import styled from "styled-components";

export const AsideRight = () => {
    return (
        <Box>
            <StickyBox>
                <GoTopButton />
            </StickyBox>
        </Box>
    );
};
const Box = styled.aside`
    grid-area: aside-right;
    margin: 3.75rem 0;
    padding: 1rem;

    @media (max-width: ${({ theme }) => theme.screen.tablet}) {
        display: none;
    }
`;

const StickyBox = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
`;
