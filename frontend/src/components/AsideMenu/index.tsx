import { Nav } from "../Nav/";
import * as Styled from "./styles";
import { Heading } from "./../Heading/";

import { ToggleThemeButton } from "./ToggleThemeButton";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const AsideMenu = () => {
    const [state, actions] = useGlobalContext();

    return (
        <>
            {(window.screen.width >= 425 || state.menuCondition === "open") && (
                <Styled.Container id="asidemenu">
                    <Heading aria-label="aside-logo" id="logo">
                        {`L O R \n E M I \n P S U`}
                    </Heading>
                    <Nav aria-label="aside-nav" />
                    <ToggleThemeButton onClick={() => actions.changeTheme()} />
                </Styled.Container>
            )}
        </>
    );
};
