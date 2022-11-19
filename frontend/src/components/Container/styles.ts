import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({
        align = "center",
        justify = "start",
        p = 0,
        m = "1rem 0",
    }: any) => css`
        display: flex;
        align-items: ${align};
        flex-direction: row;
        justify-content: ${justify};

        position: relative;
        padding: ${p}
        margin: ${m};

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
