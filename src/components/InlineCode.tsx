import styled, { css } from "styled-components";

export const InlineCode = ({ children }: any) => {
    return <StyledInlineCode>{children}</StyledInlineCode>;
};

const StyledInlineCode = styled.code`
    ${({ theme }) => css`
        letter-spacing: "mono";
        color: ${theme.color.secondaryText};
        border-radius: 8;
        padding-inline: 4;
        background-color: ${theme.color.secondarySurface};
    `}
`;
