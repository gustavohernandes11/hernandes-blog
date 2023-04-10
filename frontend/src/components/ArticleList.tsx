import React from "react";
import styled from "styled-components";

type ArticleListChildren = {
    children: React.ReactNode | React.ReactNode[];
};

export const ArticleList = ({ children }: ArticleListChildren) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
