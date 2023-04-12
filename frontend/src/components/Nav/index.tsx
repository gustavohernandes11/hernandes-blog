import styled, { css } from "styled-components";
import { NavLink } from "./NavLink";

type NavType = {
    direction?: "row" | "column";
};
export const Nav = ({ direction = "row", ...props }: NavType) => {
    const navProps = {
        direction: direction,
    };
    return (
        <Wrapper {...navProps} {...props}>
            <NavLink active={true} href="/">
                Início
            </NavLink>
            <NavLink href="/about/">Sobre</NavLink>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    ${({ direction }: any) =>
        direction === "column" &&
        css`
            flex-direction: ${direction};
            gap: 1rem;
            align-items: center;
        `};
    gap: 1rem;
`;
