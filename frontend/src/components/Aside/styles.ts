import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 3rem 1rem;
    border-right: 1px solid var(--border);
    background: url(background-galaxy.svg) no-repeat;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(50%, 50%) rotate(-45deg);
        background-color: var(--gray-900);
        width: 20px;
        height: 20px;
        border-right: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
    }

    @media (max-width: 769px) {
        display: none;
    }
`;
