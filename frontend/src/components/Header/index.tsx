import * as Styled from "./styles.js";
import { Typography } from "@mui/material";
import { Nav } from "../Nav/index";

export const Header = () => {
    return (
        <Styled.Header>
            <Typography> Template básica</Typography>
            <Nav />
        </Styled.Header>
    );
};
