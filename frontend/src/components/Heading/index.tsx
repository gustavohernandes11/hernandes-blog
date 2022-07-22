import * as Styled from "./styles.js";

export const Heading = ({ children, id }: any) => {
    return <Styled.Element id={id}>{children}</Styled.Element>;
};
