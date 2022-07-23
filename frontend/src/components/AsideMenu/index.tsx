import { Nav } from "../Nav/";
import * as Styled from "./styles.js";
import { Heading } from "./../Heading/";
import { LightBulb } from "@styled-icons/heroicons-solid";
import { Button } from "@mui/material";
export const AsideMenu = () => {
    return (
        <Styled.Container id="asidemenu">
            <Heading aria-label="aside-logo" id="logo">
                {`H E R \n N A N \n D E S`}
            </Heading>
            <Nav aria-label="aside-nav" />
            <Button color="inherit">
                <LightBulb
                    width={25}
                    height={25}
                    aria-label="toggle-theme-button"
                />
            </Button>
        </Styled.Container>
    );
};
