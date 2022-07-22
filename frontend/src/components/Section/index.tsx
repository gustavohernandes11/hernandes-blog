import * as Styled from "./styles.js";

export interface SectionTypes {
    children?: any;
    id?: string | number;
    background?: string;
}

export const Section = ({ children, id, background }: SectionTypes) => {
    return (
        <Styled.Container background={background} id={id}>
            {children}
        </Styled.Container>
    );
};
