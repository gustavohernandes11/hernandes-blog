import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        opacity: 0;
        #floating-action-button-mold-roll {
            border-radius: 10px;
            color: ${theme.colors.background};
            background: ${theme.colors.background};
            border-radius: 10px;
        }
        * > #floating-action-button-mold {
            display: flex;
            align-self: center;
            justify-self: center;
        }
    `}
`;
