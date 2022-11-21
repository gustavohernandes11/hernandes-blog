import styled, { css } from "styled-components";

export const Container = styled.code`
    ${() => css`
        display: block;
        width: 100%;
        border-radius: 5px;
        margin: 1rem 0;
        position: relative;
        white-space: break-spaces;
        /* padding: 1rem; */
        /* border: 1px solid var(--border); */
        overflow-x: auto;

        .copy-code-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            transform: translate(25%, 0%);

            :hover {
                cursor: pointer;
            }
            :focus {
                color: var(--purple);
            }
        }
    `}
`;
