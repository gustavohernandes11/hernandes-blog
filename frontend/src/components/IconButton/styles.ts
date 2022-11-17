import styled from "styled-components";
import { backgroundTypes } from "./index";

const handleBackground = (background: backgroundTypes) => {
    switch (background) {
        case false:
            return `transparent;`;

        case true:
            return `var(--gray-800);`;

        default:
            return background;
    }
};

export const Button = styled.button`
    padding: 0.5rem;
    border-radius: 500px;
    border: none;
    text-decoration: none;
    color: inherit;

    display: flex;
    flex-direction: center;
    justify-content: center;

    background: ${(props: { background: backgroundTypes }) =>
        handleBackground(props.background)};

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`;
