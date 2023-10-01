import styled, { css } from "styled-components";

export const JustifyEnd = ({ children }: any) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    ${() => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
    `}
`;
