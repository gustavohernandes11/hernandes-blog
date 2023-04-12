import { MenuBar } from "components/_mobile/MenuBar";
import { Menu } from "components/_mobile/Menu";
import { AsideLeft } from "layout/AsideLeft";
import { AsideRight } from "layout/AsideRight";
import React from "react";
import { Header } from "./Header";
import styled from "styled-components";
import { Content } from "./Content";

export const Layout = ({ children }: any) => {
    return (
        <Wrapper>
            <Header />
            <Content>{children}</Content>
            <AsideLeft />
            <AsideRight />
            <MenuBar />
            <Menu />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 4em 1fr;
    gap: 0px 0px;
    background-color: ${(props) => props.theme.backgroundColor};
    min-height: 120vh;
    grid-template-areas:
        "header header header"
        "aside-left content aside-right";

    @media (max-width: ${({ theme }) => theme.screen.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 3.75em 4fr 3.75em;
        gap: 0px 0px;
        min-height: 100vh;
        grid-template-areas:
            "header"
            "content"
            "mobile-menu-bar";
    }
`;
