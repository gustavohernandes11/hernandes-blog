import { Nav } from "../Nav/";
import * as Styled from "./styles.js";
import { Heading } from "./../Heading/";
import { LightBulb } from "@styled-icons/heroicons-solid";
import { IconButton } from "@mui/material";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const AsideMenu = () => {
    const [ , actions] = useGlobalContext();
    return (
        <Styled.Container id="asidemenu">
            <Heading aria-label="aside-logo" id="logo">
                {`H E R \n N A N \n D E S`}
            </Heading>
            <Nav aria-label="aside-nav" />
            <IconButton onClick={() => actions.changeTheme()} color="inherit">
                <LightBulb
                    width={25}
                    height={25}
                    aria-label="toggle-theme-button"
                />
            </IconButton>
        </Styled.Container>
    );
};
