import { Home, ChevronsUp } from "@styled-icons/feather";

import Link from "next/link";
import { ToggleThemeButton } from "components/ToggleThemeButton";
import styled from "styled-components";
import { MenuButton } from "./MenuButton";

export const MenuBar = () => {
    return (
        <Wrapper>
            <ToggleThemeButton color="textColor" />
            <MenuButton
                icon={Home}
                aria-label="Go home"
                as={Link}
                href={"/"}
                primary
            />
            <MenuButton
                icon={ChevronsUp}
                aria-label="Go top"
                onClick={backToTop}
            />
        </Wrapper>
    );
};

function backToTop() {
    const content = document.getElementsByClassName("content");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    content[0].scrollTop = 0;
}
const Wrapper = styled.div`
    height: 3.75rem;
    width: 100vw;
    justify: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #1b1920;
    grid-area: mobile-menu-bar;

    @media (min-width: ${(props) => props.theme.screen.mobile}) {
        display: none;
    }
`;
