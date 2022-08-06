import * as Styled from "./styles.js";

interface HeadingType {
    children: React.ReactNode;
    id?: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
}

export const Heading = ({ children, id, as = "h1" }: HeadingType) => {
    return (
        <Styled.Wrapper as={as} id={id}>
            {children}
        </Styled.Wrapper>
    );
};
