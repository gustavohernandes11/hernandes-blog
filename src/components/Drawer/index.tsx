import { Navigation } from "components/Navigation";
import * as Styled from "./styles";
import { DrawerFooter } from "./DrawerFooter";

export const Drawer = () => {
    return (
        <Styled.Container>
            <Navigation />
            <DrawerFooter />
        </Styled.Container>
    );
};
