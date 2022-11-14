import styled from "styled-components";

export const Button = styled.button`
    padding: 0.5rem;
    border-radius: 50%;
    border: none;

    display: flex;
    flex-direction:center;
    justify-content: center;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`;
