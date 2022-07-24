import { NavLink } from "./NavLink";
import * as Styled from "./styles.js";

export const Nav = () => {
    return (
        <Styled.Container>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/postexemple">PostMock</NavLink>
        </Styled.Container>
    );
};
