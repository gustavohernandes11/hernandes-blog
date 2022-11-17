import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 3rem 0;
    font-size: 0.8rem;

    @media (max-width: 425px) {
        padding: 1rem 0;
    }
`;
