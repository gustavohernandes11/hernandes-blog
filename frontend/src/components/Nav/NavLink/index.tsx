import * as Styled from "./styles.js";
import type { AppProps } from "next/app";

export function NavLink({ children }: any) {
    return <Styled.Container>{children}</Styled.Container>;
}
