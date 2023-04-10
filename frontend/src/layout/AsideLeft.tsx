import { Nav } from "../components/Nav";
import { SocialBar } from "../components/SocialBar";
import React from "react";
import { Logo } from "components/Logo";
import styled from "styled-components";

export const AsideLeft = () => {
    return (
        <Box>
            <StickyBox></StickyBox>
        </Box>
    );
};

const Box = styled.aside`
    grid-area: aside-left;
    margin: 3.75rem 0;
    padding: 1rem;

    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        display: none;
    }
`;
const StickyBox = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
`;
