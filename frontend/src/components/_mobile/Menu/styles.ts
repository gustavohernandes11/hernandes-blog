import styled from "styled-components";

export const Container = styled.menu`
    height: 3rem;
    width: 100%;
    position: fixed;
    z-index: 100;

    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;

    background-color: rgba(18, 18, 18, 0.7);
    border-top: 1px solid var(--border);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 425px) {
        background-color: rgba(18, 18, 18, 1);
        justify-content: center;
        gap: 1rem;
    }
`;

export const Button = styled.button`
    background: var(--gradient-vertical);
    color: var(--white);

    border: none;
    border-radius: 6px;

    height: 2.4rem;
    width: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }
`;
