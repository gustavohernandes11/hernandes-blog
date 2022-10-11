import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        * {
            color: ${theme.colors.text};
        }
        `}
        button:hover {
            transform: scale(1.1);
        }
`;
