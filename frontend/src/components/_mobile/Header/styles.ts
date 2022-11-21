import styled from "styled-components";

export const Container = styled.div`
    position: block;
    top: 0;
    right: 0;
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--gray-900);

    border-bottom: 1px solid var(--gray-800);
    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        display: block;
        margin: 0.5rem;
        margin-right: auto;
    }
    p {
        margin: 0rem;
        font-size: 0.8rem;
    }
    button {
        position: fixed;
        right: 1rem;
        z-index: 10;
    }
`;
