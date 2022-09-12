import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    ${({ theme }) => css`
        width: 100%;

        h1, h2, h3, p {
            margin: 0.4rem;
        }

        :hover {
            cursor: pointer;
            background-color: #212121;
        }
    `}
`;
