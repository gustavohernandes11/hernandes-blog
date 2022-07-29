import { Footer } from "../Footer/index";
import * as Styled from "./styles.js";

export const Content = ({ children, nofooter }: any) => {
    return (
        <Styled.Container id="content">
            {children}
            {!nofooter && <Footer>Criado com Next.js</Footer>}
        </Styled.Container>
    );
};
