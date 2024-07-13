import { Navigation } from "components/Navigation";
import { DrawerFooter } from "./DrawerFooter";
import * as Styled from "./styles";

export const Drawer = () => {
    return (
        <Styled.Container>
            <Navigation />
            <DrawerFooter />
        </Styled.Container>
    );
};
