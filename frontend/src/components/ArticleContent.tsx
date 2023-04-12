import React from "react";
import styled from "styled-components";

export const ArticleContent = ({ children }: any) => {
    return <Wrapper> {children}</Wrapper>;
};

const Wrapper = styled.div`
    max-width: calc(5 / 9) %;

    img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: auto;
    }
`;
