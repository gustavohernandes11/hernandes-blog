import * as Styled from "./styles";

interface HeadingType {
    children: React.ReactNode;
    id?: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    size?: "small" | "medium" | "big";
}

export const Heading = ({ children, id, as = "h1", size }: HeadingType) => {
    const properties = {
        as: as,
        id: id,
        size: size,
    };
    return <Styled.Wrapper {...properties}>{children}</Styled.Wrapper>;
};
