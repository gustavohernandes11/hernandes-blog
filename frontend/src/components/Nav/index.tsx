import * as Styled from "./styles.js";
import { NavLink } from "./NavLink";
import { Button } from "@mui/material";
export const Nav = () => {
    return (
        <Styled.Container>
            <Button>Home</Button>
            <Button>About</Button>
        </Styled.Container>
    );
};
