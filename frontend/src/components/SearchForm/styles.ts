import styled from "styled-components";

export const Form = styled.form`
    margin: 1rem 0;
    label {
        display: block;
        font-size: 0.8rem;
        margin: 0.5rem 0;
    }
    .search-field {
        display: flex;
        background-color: var(--gray-800);
        border-radius: 6px;
        max-width: 20rem;

        #search-input {
            border-radius: inherit;
            width: 100%;
            background-color: inherit;
            border: none;
            padding-inline: 0.5rem;
        }
    }
`;
