import { Copyright } from "components/Copyright";
import { Navigation } from "components/Navigation";
import { Social } from "components/Social";
import * as Styled from "./styles";

export const Drawer = () => {
    return (
        <Styled.Container>
            <Social />
            <Navigation />
            <Copyright />
        </Styled.Container>
    );
};
