import { Nav } from "../Nav/";
import * as Styled from "./styles.js";
import { Heading } from "./../Heading/";
import { LightBulb } from "@styled-icons/heroicons-outline";
import { Button } from "@mui/material";
export const AsideMenu = () => {
    return (
        <Styled.Container id="asidemenu">
            <Heading id="logo">{`H E R\nN A N\nD E S`}</Heading>
            <Nav />
            <Button>
                <LightBulb width={25} height={25} />
            </Button>
        </Styled.Container>
    );
};
