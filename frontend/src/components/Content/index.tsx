import * as Styled from "./styles";

export const Content = ({ children }: any): JSX.Element => {
    return (
        <Styled.Container id="content">
            {children}
        </Styled.Container>
    );
};
