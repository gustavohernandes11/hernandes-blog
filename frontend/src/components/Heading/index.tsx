import * as Styled from "./styles.js";

export const Heading = ({ children, id, as }: any) => {
    return <Styled.Element as={as} id={id}>{children}</Styled.Element>;
};
