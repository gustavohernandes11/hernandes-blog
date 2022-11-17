import * as Styled from "./styles";

interface HeadingType {
    children: React.ReactNode;
    id?: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    size?: "small" | "medium" | "big";
    align?: "start" | "center" | "end";
    className?: string;
}

export const Heading = ({
    children,
    id,
    as = "h1",
    size,
    className,
    align = "start"
}: HeadingType) => {
    const props = {
        as: as,
        id: id,
        size: size,
        className: className,
        align: align,
    };
    return <Styled.Wrapper {...props}>{children}</Styled.Wrapper>;
};
