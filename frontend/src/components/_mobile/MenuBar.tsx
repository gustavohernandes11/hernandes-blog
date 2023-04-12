import { Home, ArrowUp, Menu, X } from "@styled-icons/feather";

import styled from "styled-components";
import { MenuButton } from "./MenuButton";
import { mixin } from "styles/mixins";
import { useMenuContext } from "hooks/useMenuContext";

export const MenuBar = () => {
    const { isOpen, onToggle } = useMenuContext();
    const iconProps = {
        strokeWidth: 2,
        size: 20,
        color: "#F1F1F1",
    };
    return (
        <Wrapper>
            <MenuButton
                icon={<Home {...iconProps} />}
                ariaLabel="Go home"
                href={"/"}
            />
            <MenuButton
                icon={isOpen ? <X {...iconProps} /> : <Menu {...iconProps} />}
                onClick={onToggle}
                ariaLabel="Menu"
                primary={true}
            />
            <MenuButton
                icon={<ArrowUp {...iconProps} />}
                ariaLabel="Go top"
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
    ${mixin.flexCenter}
    justify-content: space-evenly;

    height: 3.76rem;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
    grid-area: mobile-menu-bar;

    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        display: none;
    }
`;
