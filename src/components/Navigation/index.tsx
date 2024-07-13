import { useMenuContext } from "hooks/useMenuContext";
import Link from "next/link";
import * as Styled from "./styles";

export const Navigation = () => {
    const { setMenuOpen } = useMenuContext();
    return (
        <Styled.Nav>
            <Link onClick={() => setMenuOpen(false)} href="/">
                Início
            </Link>
            <Link onClick={() => setMenuOpen(false)} href="/about">
                Sobre
            </Link>
        </Styled.Nav>
    );
};
