import { NavLink } from "./NavLink";
import * as Styled from "./styles";

export const Nav = () => {
    return (
        <Styled.Container>
            <NavLink href="/">Início</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
        </Styled.Container>
    );
};
