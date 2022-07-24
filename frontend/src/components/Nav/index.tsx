import * as Styled from "./styles.js";
import { Button } from "@mui/material";
import Link from "next/link";

export const Nav = () => {
    return (
        <Styled.Container>
            <Link href="/">
                <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about">
                <Button color="inherit">About</Button>
            </Link>
            <Link href="/postexemple">
                <Button color="inherit">PostMock</Button>
            </Link>
        </Styled.Container>
    );
};
