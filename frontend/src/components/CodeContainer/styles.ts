import styled, { css } from "styled-components";

export const Container = styled.code`
    ${({ theme }) => css`
        padding: ${theme.spacings[5]};
        width: 100%;
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        background: ${theme.colors.surface};
        margin: ${theme.spacings[5]} 0;
        position: relative;
        white-space: pre-line;

        .copy-code-button {
            position: absolute;
            top: ${theme.spacings[5]};
            right: ${theme.spacings[5]};
            transform: translate(25%, -25%);

            :hover {
                cursor: pointer;
            }
        }
    `}
`;
