import styled, { css } from "styled-components";

export const Wrapper = styled.blockquote`
    ${({ theme }) => css`
        margin-inline:  ${theme.spacings[4]};
        padding: ${theme.spacings[2]} ${theme.spacings[5]};
        border-left: 5px solid grey;
        

    `}
`;
