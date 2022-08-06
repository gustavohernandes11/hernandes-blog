import * as Styled from "./styles.js";

interface ImageWrapperType {
    children: React.ReactNode
}

export const ImageWrapper = ({ children }: ImageWrapperType) => {
    return <Styled.Container>{children}</Styled.Container>;
};
