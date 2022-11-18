import styled, { css } from "styled-components";
// import { AlignOptions } from "./index";

export const Container = styled.div`
    ${({ align = "start" }: any) => css`
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: ${align};
        position: relative;
        margin: 1rem 0;

        p {
            margin: 0;
        }

        .go-back {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            padding-right: 1rem;
        }
    `}
`;
