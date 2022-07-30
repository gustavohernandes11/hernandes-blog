import { Nav } from "../Nav/";
import * as Styled from "./styles.js";
import { Heading } from "./../Heading/";

import {ToggleThemeButton} from './ToggleThemeButton'
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const AsideMenu = () => {
    const [ , actions] = useGlobalContext();
    
    return (
        <Styled.Container id="asidemenu">
            <Heading aria-label="aside-logo" id="logo">
                {`H E R \n N A N \n D E S`}
            </Heading>
            <Nav aria-label="aside-nav" />
            <ToggleThemeButton onClick={() => actions.changeTheme()}/>
        </Styled.Container>
    );
};
