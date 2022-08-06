import { Footer } from "../Footer/index";
import * as Styled from "./styles.js";

export const Content = ({ children }: any): JSX.Element => {
    return (
        <Styled.Container id="content">
            {children}
        </Styled.Container>
    );
};
