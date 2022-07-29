import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        padding: ${theme.spacings[14]} 15%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
}
    `}
`;
