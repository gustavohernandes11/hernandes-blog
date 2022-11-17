import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--gray-900);
    z-index: 20;
    overscroll-behavior: contain;

    background-image: url(background-galaxy.svg);
    background-repeat: no-repeat;
    background-position-y: 5rem;
    background-size: contain;

    .wrapper {
        padding: 1rem 1rem 3rem 1rem;
        width: 100vw;
        display: flex;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .close-button {
        position: fixed;
        right: 1rem;
    }
    nav {
        margin: auto 0;
    }
`;
