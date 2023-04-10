import styled, { css } from "styled-components";
import { NavLink } from "./NavLink";

export const Nav = ({ ...props }: any) => {
    return (
        <Wrapper {...props}>
            <NavLink active={true} href="/">
                Início
            </NavLink>
            <NavLink href="/about/">Sobre</NavLink>
        </Wrapper>
    );
};

const MenuItem = ({ value, href }: any) => {
    return (
        <NavLink href={href}>
            <p>{value}</p>
        </NavLink>
    );
};

const Wrapper = styled.nav`
    display: flex;
    flex-direction: "row";
    gap: 1rem;
`;
