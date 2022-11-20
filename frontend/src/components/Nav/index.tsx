
import { NavLink } from "./NavLink";
import * as Styled from "./styles";

export const Nav = () => {


    return (
        <Styled.Container>
            <NavLink href="/">Início</NavLink>
            <NavLink href="/about" >Sobre</NavLink>
            {/* <NavLink href="/search">Buscar</NavLink> */}
        </Styled.Container>
    );
};
