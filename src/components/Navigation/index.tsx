import Link from "next/link";
import * as Styled from "./styles";

export const Navigation = () => {
    return (
        <Styled.Nav>
            <Link href="/">Início</Link>
            <Link href="/about">Sobre</Link>
        </Styled.Nav>
    );
};
