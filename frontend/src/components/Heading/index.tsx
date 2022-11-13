import * as Styled from "./styles";

interface HeadingType {
    children: React.ReactNode;
    id?: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    size?: "small" | "medium" | "big";
    className?: string;
}

export const Heading = ({
    children,
    id,
    as = "h1",
    size,
    className,
}: HeadingType) => {
    const props = {
        as: as,
        id: id,
        size: size,
        className: className,
    };
    return <Styled.Wrapper {...props}>{children}</Styled.Wrapper>;
};
